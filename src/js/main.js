import '../styles/reset.css';
import '../styles/style.css';
import '@oddbird/popover-polyfill';
import chroma from 'chroma-js';
import * as Utils from './utils.js';
import { updateRatio, updatePreview } from './update.js';
import initPictureInPicture from './pip.js';
import initEyeDropper from './eyedropper.js';
import initPermalink from './urlParams.js';
import initToolbar from './toolbar.js';
import initTheme from './theme.js';
import initUnsupported from './unsupported.js';
import * as Icon from './icons.js';

const { fg, bg } = Utils.getDefaultValues();

// Render UI
document.querySelector('#app').innerHTML = `
  <main>
    <h1>Contrast Checker</h1>
    <div id="toolbar">
      <button type="button">WCAG AA</button>
      <button type="button" id="reverse">Reverse ${Icon.reverse}</button>
      <button type="button" id="permalink">Permalink ${Icon.link}</button>
      <button type="button" id="theme">Theme</button>
      <button type="button" id="pip-btn" hidden>Pop out ${Icon.pip}</button>
    </div>

    <div id="pip-container">
      <div id="pip-only">
        <div class="dual-column">
          <section aria-labelledby="foreground" id="fg-group">
            <label for="fg-input" id="foreground">Foreground</label>
            <div class="color-picker-field">
              <input id="fg-picker" type="color" aria-label="Foreground colour picker" value="${fg}">
              <input type="text" id="fg-input" value="${fg}" autocomplete="off">
              <button id="fg-eyedropper" type="button">${Icon.eyedropper}</button>
            </div>
          </section>
          <section aria-labelledby="background">
            <label for="bg-input">Background</label>
            <div class="color-picker-field">
              <input id="bg-picker" type="color" aria-label="Background colour picker" value="${bg}">
              <input type="text" id="bg-input" value="${bg}" autocomplete="off">
              <button id="bg-eyedropper" type="button">${Icon.eyedropper}</button>
            </div>
          </section>
        </div>
        <section id="results" aria-label="Results" class="show-in-pip-only">
          <div class="result">
            <div id="ratio-label">Ratio</div>
            <div>
              <div id="ratio-container"></div>
              <span id="mini-preview" aria-hidden="true" style="color: ${fg}; background-color: ${bg}">WCAG AA</span>
            </div>
          </div>
          <div class="result">
            <div>Normal text</div>
            <div id="normal" class="badge"></div>
          </div>
          <div class="result">
            <div>Large text</div>
            <div id="large" class="badge"></div>
          </div>
          <div class="result">
            <div>Graphics</div>
            <div id="graphics" class="badge"></div>
          </div>
        </section>
      </div>
    </div>

    <section aria-labelledby="preview" id="preview-area">
      <h2 id="preview">Preview</h2>
      <div class="tri-column">
        <div class="column-1">
          <h3>Normal text <span id="low-body-text"></span></h3>
          <div id="normal-preview" class="card" style="color: ${fg}; background-color: ${bg}" contenteditable="true">
            <p>The <em>quick</em> brown fox <strong>jumps</strong> over the lazy dog.</p>
          </div>
        </div>
        <div class="column-2">
          <h3>Large text</h3>
          <div id="large-preview" class="card" style="color: ${fg}; background-color: ${bg}" contenteditable="true">
            <p>The <em>quick</em> brown fox <strong>jumps</strong> over the lazy dog.</p>
          </div>
        </div>
        <div class="column-3">
          <h3>Graphics</h3>
          <div id="graphics-preview" class="card" style="color: ${fg}; background-color: ${bg}">
            ${Icon.bell + Icon.check + Icon.drop + Icon.cloud + Icon.trash + Icon.star}
          </div>
        </div>
      </div>
    </section>
  </main>
`;

// Elements.
const fgInput = document.getElementById('fg-input');
const bgInput = document.getElementById('bg-input');
const fgPicker = document.getElementById('fg-picker');
const bgPicker = document.getElementById('bg-picker');

// synchronize colour value across all inputs and update ratio and preview.
const updateColor = (inputElement, pickerElement, colorValue, colorType) => {
  const inputEl = inputElement;
  const pickerEl = pickerElement;
  inputEl.value = colorValue;

  // && chroma.valid(fgColor) && chroma.valid(bgColor)
  // To-do: use chroma valid for when color does not start with color-mix();

  // Returns valid 6 digit hex for native color input.
  pickerEl.value = chroma(colorValue);
  // Saves validated colour.
  Utils.store.setItem(colorType, chroma(colorValue));
  updateRatio();
  updatePreview();

  // Clear URL params when user starts interacting with the picker.
  window.history.replaceState(null, '', window.location.pathname);
};

// Register event listeners.
fgPicker.addEventListener('input', () => {
  const fgColor = Utils.normalizeColorInput(fgPicker.value);
  updateColor(fgInput, fgPicker, fgColor, 'foreground');
});
fgInput.addEventListener('input', () => {
  const fgColor = Utils.normalizeColorInput(fgInput.value);
  updateColor(fgInput, fgPicker, fgColor, 'foreground');
});
bgPicker.addEventListener('input', () => {
  const bgColor = Utils.normalizeColorInput(bgPicker.value);
  updateColor(bgInput, bgPicker, bgColor, 'background');
});
bgInput.addEventListener('input', () => {
  const bgColor = Utils.normalizeColorInput(bgInput.value);
  updateColor(bgInput, bgPicker, bgColor, 'background');
});

// Initialize
initEyeDropper();
initPermalink();
initToolbar();
initPictureInPicture();
initTheme();
initUnsupported();

// Update ratio on page load.
updateRatio();
