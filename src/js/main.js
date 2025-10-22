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
import Lang from './utils/lang.js';

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
import initLang from './components/lang-switcher.js';

// Get default values.
const { fg, bg } = Utils.getDefaultValues();
const wcagLevel =
  Utils.store.getItem('level') === 'aa' ? 'WCAG AA' : 'WCAG AAA';
const hideAAA = Utils.store.getItem('level') === 'aa' ? 'hidden' : '';

// Default page lang.
let locale = Utils.store.getItem('lang');
if (!locale) {
  const navLang = navigator.language || navigator.userLanguage;
  locale = navLang ? navLang.replace('-', '') : 'enUS';
}

// Cloudflare doesn't support top-level async call, so wrap in IIFE.
(async () => {
  // Fetch locale.
  await Lang.setLocale(locale);

  // Render UI.
  document.querySelector('#app').innerHTML = `
  <nav><a href="#settings" class="skip">${Lang._('SKIP_TO_SETTINGS')}</a></nav>
  <main>
    <h1>${Lang._('CONTRAST_REPORT')}</h1>
    <div id="pip-container">
      <div id="pip-only">
        <div id="alert" aria-live="polite" role="status"></div>
        <div id="color-tools">
          <button type="button" id="pip-btn" class="glow">${Lang._('POP_OUT')} ${Icon.pip}</button>
          <button type="button" id="reverse"><span class="lg-only">${Lang._('REVERSE')}</span> ${Icon.reverse}</button>
          <button type="button" id="save">${Lang._('SAVE')}</button>
          <button type="button" id="permalink"><span class="lg-only">${Lang._('SHARE')}</span> ${Icon.link}</button>
        </div>
        <section class="flex-container" aria-labelledby="color-pickers">
          <h2 class="sr-only" id="color-pickers">${Lang._('COLOURS')}</h2>
          <div class="flex-item">
            <label for="fg-input" id="foreground"><h3>${Lang._('FOREGROUND')}</h3></label>
            <div class="color-picker-field">
              <button
                id="fg-btn"
                type="button"
                class="hide-in-pip color-picker-btn"
                style="background-color: ${fg}"
                aria-label="${Lang._('OPEN_FG_PICKER')}"
              ></button>
              <div id="fg-popover" class="popover" hidden>
                <hex-alpha-color-picker color="${fg}"></hex-alpha-color-picker>
                <rgba-string-color-picker color="${fg}"></rgba-string-color-picker>
                <hsla-string-color-picker color="${fg}"></hsla-string-color-picker>
              </div>
              <input class="show-in-pip-only" id="fg-picker-native" type="color" aria-label="${Lang._('FOREGROUND_PICKER')}" value="${Sa11y.getHex(Sa11y.convertToRGBA(fg))}">
              <input type="text" id="fg-input" value="${fg}" autocomplete="off" spellcheck="false">
              <button id="fg-eyedropper" type="button" aria-label="${Lang._('FOREGROUND_EYEDROPPER')}">
                ${Icon.eyedropper}
              </button>
            </div>
          </div>
          <div class="flex-item">
            <label for="bg-input"><h3>${Lang._('BACKGROUND')}</h3></label>
            <div class="color-picker-field">
              <button
                id="bg-btn"
                type="button"
                class="hide-in-pip color-picker-btn"
                aria-label="${Lang._('OPEN_BG_PICKER')}"
                style="background-color: ${bg}"
              ></button>
              <div id="bg-popover" class="popover" hidden>
                <hex-color-picker color="${bg}"></hex-color-picker>
                <rgb-string-color-picker color="${bg}"></rgb-string-color-picker>
                <hsl-string-color-picker color="${bg}"></hsl-string-color-picker>
              </div>
              <input class="show-in-pip-only" id="bg-picker-native" type="color" aria-label="${Lang._('BACKGROUND_PICKER')}" value="${Sa11y.getHex(Sa11y.convertToRGBA(bg))}">
              <input type="text" id="bg-input" value="${bg}" autocomplete="off" spellcheck="false">
              <button id="bg-eyedropper" type="button" aria-label="${Lang._('BACKGROUND_EYEDROPPER')}">
                ${Icon.eyedropper}
              </button>
            </div>
          </div>
          <div id="large-ratio" class="flex-item">
            <div class="large-ratio-wrapper">
              <h3>${Lang._('CONTRAST_RATIO')}</h3>
              <div class="get-ratio badge"></div>
            </div>
          </div>
        </section>
        <section id="results" aria-label="${Lang._('RESULTS')}" class="show-in-pip-only">
          <div class="result">
            <h3 id="ratio-label">${Lang._('CONTRAST')}<span class="get-ratio badge"></span></h3>
            <div class="preview-border">
              <span id="mini-preview" style="color: ${fg}; background-color: ${bg}">${Lang._('PREVIEW')}</span>
            </div>
          </div>
          <div class="result">
            <div>${Lang._('NORMAL_TEXT')}</div>
            <div>
              <div class="normal"></div>
              <div class="aaanormal" ${hideAAA}></div>
            </div>
          </div>
          <div class="result">
            <div>${Lang._('LARGE_TEXT')}</div>
            <div>
              <div class="large"></div>
              <div class="aaalarge" ${hideAAA}></div>
            </div>
          </div>
          <div class="result">
            <div>${Lang._('GRAPHICS_AND_UI')}</div>
            <div>
              <div class="graphics"></div>
              <div class="aaagraphics" ${hideAAA}></div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <section aria-labelledby="preview" id="preview-area">
      <h2 id="preview">${Lang._('PREVIEW')}</h2>
      <div class="flex-container">
        <div class="flex-item">
          <div class="header">
            <h3>${Lang._('NORMAL_TEXT')}</h3>
            <div>
              <span class="normal"></span>
              <span class="aaanormal" ${hideAAA}></span>
              <button type="button" class="normal-fix">${Lang._('FIX')} ${Icon.fix}</button>
            </div>
          </div>
          <div class="preview-border">
            <div id="normal-preview" class="card" style="color: ${fg}; background-color: ${bg};" contenteditable="true" autocomplete="off" spellcheck="false"></div>
          </div>
        </div>
        <div class="flex-item">
          <div class="header">
            <h3>${Lang._('LARGE_TEXT')}</h3>
            <div>
              <span class="large"></span>
              <span class="aaalarge" ${hideAAA}></span>
              <button type="button" class="large-fix">${Lang._('FIX')} ${Icon.fix}</button>
            </div>
          </div>
          <div class="preview-border">
            <div id="large-preview" class="card" style="color: ${fg}; background-color: ${bg};" contenteditable="true" autocomplete="off" spellcheck="false"></div>
          </div>
        </div>
        <div class="flex-item">
          <div class="header">
            <h3>${Lang._('GRAPHICS_AND_UI')}</h3>
            <div>
              <span class="graphics"></span>
              <span class="aaagraphics" ${hideAAA}></span>
              <button type="button" class="graphics-fix">${Lang._('FIX')} ${Icon.fix}</button>
            </div>
          </div>
          <div class="preview-border">
            <div id="graphics-preview" class="card" style="color: ${fg}; background-color: ${bg};">
              <div class="icons">${Icon.bell + Icon.cloud + Icon.arrowRight + Icon.star}</div>
              <div id="graphics-text"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section aria-labelledby="settings" id="settings-section">
      <h2 id="settings">${Lang._('SETTINGS')}</h2>
      <div id="toolbar">
        <button type="button" id="level" lang="en">${wcagLevel}</button>
        <button type="button" id="theme">${Lang._('THEME')} ${Icon.moon}</button>
        <div class="select-dropdown"><select id="lang-select" aria-label="${Lang._('LANGUAGE')}"></select></div>
      </div>
    </section>
    <section id="saved-colors" aria-labelledby="saved-colors-heading" hidden>
      <h2 id="saved-colors-heading">${Lang._('SAVED_COLOURS')}</h2>
      <ul id="swatch-container"></ul>
    </section>
  </main>
  <footer>
    <details id="about">
      <summary><h2>${Lang._('EXPLANATION')}</h2></summary>
      ${Lang._('EXPLANATION_BODY')}
    </details>
    <details>
      <summary><h2>${Lang._('ABOUT_THIS_WEBSITE')}</h2></summary>
      ${Lang._('ABOUT_BODY')}
      <iframe src="https://github.com/sponsors/adamchaboryk/card" title="${Lang._('SPONSOR')}" height="100%" width="600" style="border: 0;padding-top:10px;"></iframe>
    </details>
    <p class="improve-translation">${Icon.github} <a href="https://github.com/adamchaboryk/contrast.report/blob/main/src/js/locales/${locale}.js">${Lang._('IMPROVE_TRANSLATION')}</a></p>
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
  initLang();
})();
