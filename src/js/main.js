import '../styles/reset.css';
import '../styles/style.css';
import '@oddbird/popover-polyfill';
import { store } from 'sa11y/src/js/utils/utils.js';
import { normalizeColorInput, transparentHexToSolid } from './utils.js';
import { updateRatio, updatePreview } from './update.js';
import pip from './pip.js';
import initEyeDropper from './eyedropper.js';
import initPermalink from './urlParams.js';
import { bell, check, cloud, trash, star, eyedropper, drop } from './icons.js';

// Initial values: Prioritize permalink values, then local storage.
const params = new URLSearchParams(window.location.search);
const fg = params.get('fg') || store.getItem('foreground') || '#ffffff';
const bg = params.get('bg') || store.getItem('background') || '#000000';

// Render UI
document.querySelector('#app').innerHTML = `
  <main>
    <h1>Colour Contrast Checker</h1>
    <div id="pip-container">
      <div id="pip-only">
        <div class="color-inputs">

          <section aria-labelledby="foreground" id="fg-group">
            <label for="fg-input" id="foreground">Foreground</label>
            <div class="color-picker-field">
              <button id="fg-eyedropper" type="button">${eyedropper}</button>
              <input id="fg-picker" type="color" aria-label="Foreground colour picker" value="${fg}">
              <input type="text" id="fg-input" value="${fg}" autocomplete="off">
            </div>
          </section>

          <section aria-labelledby="background">
            <label for="bg-input">Background</label>
            <div class="color-picker-field">
              <button id="bg-eyedropper" type="button">${eyedropper}</button>
              <input id="bg-picker" type="color" aria-label="Background colour picker" value="${bg}">
              <input type="text" id="bg-input" value="${bg}" autocomplete="off">
            </div>
          </section>
        </div>

        <h2>Ratio <div id="ratio-container"></div> <span id="preview" style="color: ${fg}; background-color: ${bg}">${drop}</span></h2>
        <div id="toolbar">
          <button type="button" id="wcag-aa">WCAG AA</button>
          <button type="button" id="reverse">Reverse</button>
        </div>
      </div>
    </div>
  </main>

  <div id="controlbar"></div>
  <aside aria-labelledby="preview">

    <!-- Permalink only works in desktop mode -->
    <button type="button" id="permalink">Permalink</button>
    <button type="button" id="convert">Convert</button>

    <h2 id="preview" class="visually-hidden">Preview</h2>
    <h3>Body text <span id="low-body-text"></span></h3>
    <div id="normal" class="card" style="color: ${fg}; background-color: ${bg}" contenteditable="true">
      <p>The <em>quick</em> brown fox <strong>jumps</strong> over the lazy dog.</p>
    </div>

    <h3>Large text</h3>
    <div id="large" class="card" style="color: ${fg}; background-color: ${bg}" contenteditable="true">
      <p>The <em>quick</em> brown fox <strong>jumps</strong> over the lazy dog.</p>
    </div>

    <h3>Graphics</h3>
    <div id="icons" class="card" style="color: ${fg}; background-color: ${bg}">
      ${bell + check + cloud + trash + star}
    </div>
  </aside>
`;

// Elements.
const fgInput = document.getElementById('fg-input');
const bgInput = document.getElementById('bg-input');
const fgPicker = document.getElementById('fg-picker');
const bgPicker = document.getElementById('bg-picker');
const reverseBtn = document.getElementById('reverse');

// synchronize colour value across all inputs and update ratio and preview.
const updateColor = (inputElement, pickerElement, colorValue, colorType) => {
  const inputEl = inputElement;
  const pickerEl = pickerElement;
  inputEl.value = colorValue;
  pickerEl.value = colorValue;
  store.setItem(colorType, colorValue);
  updateRatio();
  updatePreview();
};

// Register event listeners.
fgPicker.addEventListener('input', () => {
  const fgColor = normalizeColorInput(fgPicker.value);
  updateColor(fgInput, fgPicker, fgColor, 'foreground');
});
fgInput.addEventListener('input', () => {
  const fgColor = normalizeColorInput(fgInput.value);
  updateColor(fgInput, fgPicker, fgColor, 'foreground');
});
bgPicker.addEventListener('input', () => {
  const bgColor = normalizeColorInput(bgPicker.value);
  updateColor(bgInput, bgPicker, bgColor, 'background');
});
bgInput.addEventListener('input', () => {
  const bgColor = normalizeColorInput(bgInput.value);
  updateColor(bgInput, bgPicker, bgColor, 'background');
});

// Reverse colours button.
reverseBtn.addEventListener('click', () => {
  const tempFg = fgInput.value;
  const tempBg = bgInput.value;
  fgInput.value = tempBg;
  bgInput.value = transparentHexToSolid(tempFg);
  fgPicker.value = tempBg;
  bgPicker.value = transparentHexToSolid(tempFg);
  updateRatio();
  updatePreview();
});

updateRatio();
initEyeDropper();
initPermalink();
pip();
