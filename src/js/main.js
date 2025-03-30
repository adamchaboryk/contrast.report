import '../styles/reset.css';
import '../styles/style.css';
import * as Utils from './utils.js';
import * as Icon from './icons.js';
import { updateRatio, initEventListeners } from './update.js';
import initPictureInPicture from './pip.js';
import initEyeDropper from './eyedropper.js';
import initPermalink from './urlParams.js';
import initToolbar from './toolbar.js';
import initTheme from './theme.js';
import initUnsupported from './unsupported.js';
import initAutoFix from './autofix.js';

const { fg, bg } = Utils.getDefaultValues();

// Render UI
document.querySelector('#app').innerHTML = `
  <nav><a href="#settings" class="skip" accesskey="s">Skip to settings</a></nav>
  <main>
    <h1>Contrast Checker</h1>
    <div id="pip-container">
      <div id="pip-only">
        <section class="dual-column" aria-labelledby="color-pickers">
          <h2 class="sr-only" id="color-pickers">Colours</h2>
          <div id="fg-group">
            <label for="fg-input" id="foreground"><h3>Foreground</h3></label>
            <div class="color-picker-field">
              <input id="fg-picker" type="color" aria-label="Foreground colour picker" value="${fg}">
              <input type="text" id="fg-input" value="${fg}" autocomplete="off">
              <button id="fg-eyedropper" type="button" aria-label="Foreground eyedropper">
                ${Icon.eyedropper}
              </button>
            </div>
            <div id="fg-color-name"></div>
          </div>
          <div id="bg-group">
            <label for="bg-input"><h3>Background</h3></label>
            <div class="color-picker-field">
              <input id="bg-picker" type="color" aria-label="Background colour picker" value="${bg}">
              <input type="text" id="bg-input" value="${bg}" autocomplete="off">
              <button id="bg-eyedropper" type="button" aria-label="Background eyedropper">
                ${Icon.eyedropper}
              </button>
            </div>
          </div>
          <div id="large-ratio">
            <h3>Ratio</h3>
            <div class="get-ratio badge"></div>
          </div>
        </section>
        <section id="results" aria-label="Results" class="show-in-pip-only">
          <div class="result">
            <h3 id="ratio-label">Ratio</h3>
            <div>
              <span id="mini-preview" aria-hidden="true" style="color: ${fg}; background-color: ${bg}">Preview</span>
              <span class="get-ratio badge"></span>
            </div>
          </div>
          <div class="result">
            <div>Normal text</div>
            <div class="normal"></div>
          </div>
          <div class="result">
            <div>Large text</div>
            <div class="large"></div>
          </div>
          <div class="result">
            <div>Graphics</div>
            <div class="graphics"></div>
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
              <button type="button" class="normal-fix">Fix ${Icon.fix}</button>
              <span class="normal"></span>
            </div>
          </div>
          <div id="normal-preview" class="card" style="color: ${fg}; background-color: ${bg}" contenteditable="true">
            <p>The <em>quick</em> brown fox <strong>jumps</strong> over the lazy dog.</p>
          </div>
        </div>
        <div class="flex-item">
          <div class="header">
            <h3>Large text</h3>
            <div>
              <button type="button" class="large-fix">Fix ${Icon.fix}</button>
              <span class="large"></span>
            </div>
          </div>
          <div id="large-preview" class="card" style="color: ${fg}; background-color: ${bg}" contenteditable="true">
            <p>The <em>quick</em> brown fox <strong>jumps</strong> over the lazy dog.</p>
          </div>
        </div>
        <div class="flex-item">
          <div class="header">
            <h3>Graphics</h3>
            <div>
              <button type="button" class="graphics-fix">Fix ${Icon.fix}</button>
              <span class="graphics"></span>
            </div>
          </div>
          <div id="graphics-preview" class="card" style="color: ${fg}; background-color: ${bg}">
            ${Icon.bell + Icon.check + Icon.drop + Icon.cloud + Icon.trash + Icon.star}
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="settings" id="settings-section">
      <h2 id="settings">Settings</h2>
      <div id="toolbar">
        <button type="button">WCAG AA</button>
        <button type="button" id="reverse">Reverse ${Icon.reverse}</button>
        <button type="button" id="permalink">Permalink ${Icon.link}</button>
        <button type="button">Save swatch</button>
        <button type="button" id="theme">Theme</button>
        <button type="button" id="pip-btn" hidden>Pop out ${Icon.pip}</button>
      </div>
    </section>

    <section id="saved-colors" aria-labelledby="saved-colors">
      <h2 id="saved-colors">Saved colours</h2>
    </section>
  </main>
  <footer>
    <details>
      <summary><h2>About</h2></summary>
      <h3>Privacy</h3>
      <p>No personal data is ever collected using this website. This website uses your browser’s web storage to remember recently used colour combination. This website uses privacy-oriented analytics. The analytics do not track IP addresses, fingerprints or cookies.</p>
      <h3>Acknowledgements</h3>
      <p>Crafted by <a href="https://chaboryk.xyz">Adam Chaboryk.</a>
    </details>
  </footer>
`;

// Update ratio on page load.
updateRatio();

// Initialize tools
initUnsupported();
initEyeDropper();
initPermalink();
initToolbar();
initPictureInPicture();
initTheme();
initAutoFix();
initEventListeners();
