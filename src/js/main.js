// Styles
import '../styles/reset.css';
import '../styles/style.css';

// Dependencies
import * as Sa11y from 'sa11y/src/js/utils/contrast-utils.js';
import 'vanilla-colorful/hex-alpha-color-picker.js';
import 'vanilla-colorful/hex-color-picker.js';
import 'vanilla-colorful/rgba-string-color-picker.js';
import 'vanilla-colorful/rgb-string-color-picker.js';
import 'vanilla-colorful/hsla-string-color-picker.js';
import 'vanilla-colorful/hsl-string-color-picker.js';
import '@oddbird/popover-polyfill';

// Utils
import * as Utils from './utils/utils.js';
import * as Icon from './utils/icons.js';

// Components
import Constants from './utils/constants.js';
import initUnsupported from './components/unsupported.js';
import initPictureInPicture from './components/picture-in-picture.js';
import initEyeDropper from './components/eyedropper.js';
import initToolbar from './components/toolbar.js';
import initAutoFix from './components/autofix.js';
import initColorInputs from './components/contrast.js';
import initSavedColors from './components/swatches.js';
import initColorPickers from './components/color-pickers.js';

// Get default values.
const { fg, bg } = Utils.getDefaultValues();
const wcagLevel =
  Utils.store.getItem('level') === 'aa' ? 'WCAG AA' : 'WCAG AAA';
const hideAAA = Utils.store.getItem('level') === 'aa' ? 'hidden' : '';

// Render UI.
document.querySelector('#app').innerHTML = `
  <nav><a href="#settings" class="skip">Skip to settings</a></nav>
  <main>
    <h1>Contrast Report</h1>
    <div id="pip-container">
      <div id="pip-only">
        <div id="alert" aria-live="polite" role="status"></div>
        <div id="color-tools">
          <button type="button" id="reverse"><span class="lg-only">Reverse</span> ${Icon.reverse}</button>
          <button type="button" id="save">Save</button>
          <button type="button" id="permalink"><span class="lg-only">Share</span> ${Icon.link}</button>
        </div>
        <section class="flex-container" aria-labelledby="color-pickers">
          <h2 class="sr-only" id="color-pickers">Colours</h2>
          <div class="flex-item">
            <label for="fg-input" id="foreground"><h3>Foreground</h3></label>
            <div class="color-picker-field">
              <button
                id="fg-btn"
                type="button"
                class="hide-in-pip color-picker-btn"
                style="background-color: ${fg}"
                aria-label="Open text colour picker"
              ></button>
              <div id="fg-popover" class="popover" hidden>
                <hex-alpha-color-picker color="${fg}"></hex-alpha-color-picker>
                <rgba-string-color-picker color="${fg}"></rgba-string-color-picker>
                <hsla-string-color-picker color="${fg}"></hsla-string-color-picker>
              </div>
              <input class="show-in-pip-only" id="fg-picker-native" type="color" aria-label="Foreground colour picker" value="${Sa11y.getHex(Sa11y.convertToRGBA(fg))}">
              <input type="text" id="fg-input" value="${fg}" autocomplete="off" spellcheck="false">
              <button id="fg-eyedropper" type="button" aria-label="Foreground eyedropper">
                ${Icon.eyedropper}
              </button>
            </div>
          </div>
          <div class="flex-item">
            <label for="bg-input"><h3>Background</h3></label>
            <div class="color-picker-field">
              <button
                id="bg-btn"
                type="button"
                class="hide-in-pip color-picker-btn"
                aria-label="Open background colour picker"
                style="background-color: ${bg}"
              ></button>
              <div id="bg-popover" class="popover" hidden>
                <hex-color-picker color="${bg}"></hex-color-picker>
                <rgb-string-color-picker color="${bg}"></rgb-string-color-picker>
                <hsl-string-color-picker color="${bg}"></hsl-string-color-picker>
              </div>
              <input class="show-in-pip-only" id="bg-picker-native" type="color" aria-label="Background colour picker" value="${Sa11y.getHex(Sa11y.convertToRGBA(bg))}">
              <input type="text" id="bg-input" value="${bg}" autocomplete="off" spellcheck="false">
              <button id="bg-eyedropper" type="button" aria-label="Background eyedropper">
                ${Icon.eyedropper}
              </button>
            </div>
          </div>
          <div id="large-ratio" class="flex-item">
            <div class="large-ratio-wrapper">
              <h3>Contrast Ratio</h3>
              <div class="get-ratio badge"></div>
            </div>
          </div>
        </section>
        <section id="results" aria-label="Results" class="show-in-pip-only">
          <div class="result">
            <h3 id="ratio-label">Contrast <span class="get-ratio badge"></span></h3>
            <div class="preview-border">
              <span id="mini-preview" style="color: ${fg}; background-color: ${bg}">Preview</span>
            </div>
          </div>
          <div class="result">
            <div>Normal text</div>
            <div>
              <div class="normal"></div>
              <div class="aaanormal" ${hideAAA}></div>
            </div>
          </div>
          <div class="result">
            <div>Large text</div>
            <div>
              <div class="large"></div>
              <div class="aaalarge" ${hideAAA}></div>
            </div>
          </div>
          <div class="result">
            <div>Graphics & UI</div>
            <div>
              <div class="graphics"></div>
              <div class="aaagraphics" ${hideAAA}></div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <section aria-labelledby="preview" id="preview-area">
      <h2 id="preview">Preview</h2>
      <div class="flex-container">
        <div class="flex-item">
          <div class="header">
            <h3>Normal text</h3>
            <div>
              <span class="normal"></span>
              <span class="aaanormal" ${hideAAA}></span>
              <button type="button" class="normal-fix">Fix ${Icon.fix}</button>
            </div>
          </div>
          <div class="preview-border">
            <div id="normal-preview" class="card" style="color: ${fg}; background-color: ${bg};" contenteditable="true" autocomplete="off" spellcheck="false"></div>
          </div>
        </div>
        <div class="flex-item">
          <div class="header">
            <h3>Large text</h3>
            <div>
              <span class="large"></span>
              <span class="aaalarge" ${hideAAA}></span>
              <button type="button" class="large-fix">Fix ${Icon.fix}</button>
            </div>
          </div>
          <div class="preview-border">
            <div id="large-preview" class="card" style="color: ${fg}; background-color: ${bg};" contenteditable="true" autocomplete="off" spellcheck="false"></div>
          </div>
        </div>
        <div class="flex-item">
          <div class="header">
            <h3>Graphics & UI</h3>
            <div>
              <span class="graphics"></span>
              <span class="aaagraphics" ${hideAAA}></span>
              <button type="button" class="graphics-fix">Fix ${Icon.fix}</button>
            </div>
          </div>
          <div class="preview-border">
            <div id="graphics-preview" class="card" style="color: ${fg}; background-color: ${bg};">
              <div class="icons">${Icon.bell + Icon.cloud + Icon.trash + Icon.star}</div>
              <div id="graphics-text"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section aria-labelledby="settings" id="settings-section">
      <h2 id="settings">Settings</h2>
      <div id="toolbar">
        <button type="button" id="level">${wcagLevel}</button>
        <button type="button" id="theme">Theme ${Icon.moon}</button>
        <button type="button" id="pip-btn" class="glow">Pop out ${Icon.pip}</button>
      </div>
    </section>
    <section id="saved-colors" aria-labelledby="saved-colors-heading" hidden>
      <h2 id="saved-colors-heading">Saved colours</h2>
      <ul id="swatch-container"></ul>
    </section>
  </main>
  <footer>
    <details id="about">
      <summary><h2>Explanation</h2></summary>
      <ul>
        <li>WCAG is an abbreviation for Web Content Accessibility Guidelines.</li>
        <li>WCAG has three levels: A, AA, and AAA. There are different required contrast ratios for AA and AAA.</li>
        <li>Normal size text (or body text) requires a contrast ratio of at least 4.5:1.</li>
        <li>Large size text (or heading text) requires a contrast ratio of at least 3:1.</li>
        <li>Large text is defined as 14 point (18.67 px) and bold or larger, or 18 point (24 px) or larger.</li>
        <li>All graphics, icons, or interface items should have at least a 3:1 contrast ratio for both AA and AAA.</li>
      </ul>
    </details>
    <details>
      <summary><h2>About this website</h2></summary>
      <p>Crafted by <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Privacy</h3>
      <p>No personal data is ever collected using this website. This website uses your browser’s web storage to remember recently used colour combination. This website uses privacy-oriented analytics. The analytics do not track IP addresses, fingerprints, or cookies.</p>
      <h3>Open source</h3>
      <p>View the <a href="https://github.com/adamchaboryk/contrast.report">source code on GitHub.</a></p>
      <iframe src="https://github.com/sponsors/adamchaboryk/card" title="Sponsor adamchaboryk" height="100%" width="600" style="border: 0;padding-top:10px;"></iframe>
    </details>
  </footer>
`;

// Initialize components.
Constants.initConstants();
initUnsupported();
initEyeDropper();
initPictureInPicture();
initToolbar();
initAutoFix();
initColorInputs();
initSavedColors();
initColorPickers();
