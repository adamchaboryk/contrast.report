import '../styles/reset.css';
import '../styles/style.css';
import '@oddbird/popover-polyfill';
import chroma from 'chroma-js';
import 'vanilla-colorful/rgb-string-color-picker.js';
import 'vanilla-colorful/rgba-string-color-picker.js';
import { computePosition } from '@floating-ui/dom';
import * as Sa11yContrastUtils from 'sa11y/src/js/utils/contrast-utils.js';
import { bell, check, cart, cloud, trash, star } from './icons.js';

// Function to get URL parameters
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    fg: `${params.get('fg') || '#ffffff'}`,
    bg: `${params.get('bg') || '#000000'}`,
  };
}

// Function to update URL parameters
function updateUrlParams(fg, bg) {
  const params = new URLSearchParams(window.location.search);
  params.set('fg', fg);
  params.set('bg', bg);
  window.history.replaceState(null, '', `?${params}`);
}

// Function to generate permalink
function generatePermalink(fg, bg) {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?fg=${encodeURIComponent(fg)}&bg=${encodeURIComponent(bg)}`;
}

// Get initial values
const { fg, bg } = getUrlParams();

// Render UI
document.querySelector('#app').innerHTML = `
  <main>
    <h1>Contrast Ratio <div id="ratio-container"></div></h1>
    <div class="column">
      <div class="foreground">
        <label for="fg-input">Foreground</label>
        <div class="color-picker-field">
          <button
            id="fg-btn"
            type="button"
            style="background-color: ${fg}"
            aria-label="Open text colour picker"
            popovertarget="fg-popover"
          ></button>
          <div id="fg-popover" popover>
            <rgba-string-color-picker id="fg-picker" color="${fg}"></rgba-string-color-picker>
          </div>
          <input type="text" id="fg-input" value="${fg}">
        </div>
      </div>
      <div class="background">
        <label for="bg-input">Background</label>
        <div class="color-picker-field">
          <button
            id="bg-btn"
            type="button"
            aria-label="Open background colour picker"
            style="background-color: ${bg}"
            popovertarget="bg-popover"
          ></button>
          <div id="bg-popover" popover>
            <rgb-string-color-picker id="bg-picker" color="${bg}"></rgb-string-color-picker>
          </div>
          <input type="text" id="bg-input" value="${bg}">
        </div>
      </div>
    </div>
    <div id="toolbar">
      <button type="button" id="wcag-aa">WCAG AA</button>
      <button type="button" id="reverse">Reverse</button>
      <button type="button" id="permalink">Permalink</button>
    </div>
  </main>
  <aside aria-labelledby="preview">
    <h2 id="preview" class="visually-hidden">Preview</h2>
    <h3>Body text <span id="low-body-text"></span></h3>
    <div id="normal" class="card" style="color: ${fg}; background-color: ${bg}" contenteditable="true">
      <p>The <em>quick</em> brown fox <strong>jumps</strong> over the lazy dog.</p>
    </div>

    <h3>Large text</h3>
    <div id="large" class="card" style="color: ${fg}; background-color: ${bg}" contenteditable="true">
      <p>The <em>quick</em> brown fox <strong>jumps</strong> over the lazy dog.</p>
    </div>

    <h3>Non-text</h3>
    <div id="icons" class="card" style="color: ${fg}; background-color: ${bg}">
      ${bell + check + cart + cloud + trash + star}
    </div>
  </aside>
`;

// Select elements
const fgPicker = document.getElementById('fg-picker');
const fgBtn = document.getElementById('fg-btn');
const fgInput = document.getElementById('fg-input');
const fgPopover = document.getElementById('fg-popover');

const bgPicker = document.getElementById('bg-picker');
const bgBtn = document.getElementById('bg-btn');
const bgInput = document.getElementById('bg-input');
const bgPopover = document.getElementById('bg-popover');

const reverseBtn = document.getElementById('reverse');
const permalinkBtn = document.getElementById('permalink');

// Calculate contrast.
const updateRatio = () => {
  const fgColor = fgInput.value;
  const bgColor = bgInput.value;

  // Check if both colors are valid Chroma.js colors
  console.log(`${chroma(fgColor).name()}`);
  if (chroma.valid(fgColor) && chroma.valid(bgColor)) {
    const contrast = Sa11yContrastUtils.calculateContrast(
      Sa11yContrastUtils.convertToRGBA(fgColor),
      Sa11yContrastUtils.convertToRGBA(bgColor),
    );

    if (!Number.isNaN(contrast.ratio) && Number.isFinite(contrast.ratio)) {
      const ratio = document.getElementById('ratio-container');
      ratio.innerHTML = `<div id="ratio">${contrast.ratio.toFixed(2)}<span class="divider">:</span>1</div>`;
      reverseBtn.removeAttribute('hidden');
      permalinkBtn.removeAttribute('hidden');
    }
  } else {
    document.getElementById('ratio-container').innerHTML = '';
    reverseBtn.toggleAttribute('hidden', true);
    permalinkBtn.toggleAttribute('hidden', true);
  }
};
updateRatio();

// Update preview.
const updatePreview = () => {
  const elements = ['normal', 'large', 'icons'];
  elements.forEach((id) => {
    const element = document.getElementById(id);
    element.style.color = fgInput.value;
    element.style.backgroundColor = bgInput.value;
  });

  // Clear URL params when user starts interacting with the picker.
  window.history.replaceState(null, '', window.location.pathname);
};

function sanitizeColorInput(color) {
  let sanitizedColor = color.trim();
  if (sanitizedColor.endsWith(';')) {
    sanitizedColor = sanitizedColor.slice(0, -1);
  }
  return sanitizedColor;
}

// Foreground event listeners
fgPicker.addEventListener('color-changed', (event) => {
  const color = event.detail.value;
  fgInput.value = color;
  fgBtn.style.backgroundColor = color;
  updateRatio();
  updatePreview();
});

fgInput.addEventListener('input', () => {
  const colorValue = sanitizeColorInput(fgInput.value);
  fgPicker.color = colorValue;
  fgInput.value = colorValue;
  fgBtn.style.backgroundColor = colorValue;
  updateRatio();
  updatePreview();
});

// Background event listeners
bgPicker.addEventListener('color-changed', (event) => {
  const color = event.detail.value;
  bgInput.value = color;
  bgBtn.style.backgroundColor = color;
  updateRatio();
  updatePreview();
});

bgInput.addEventListener('input', () => {
  const colorValue = sanitizeColorInput(bgInput.value);
  bgInput.value = colorValue;
  bgPicker.color = colorValue;
  bgBtn.style.backgroundColor = colorValue;
  updateRatio();
  updatePreview();
});

// Permalink button listener
permalinkBtn.addEventListener('click', () => {
  const permalink = generatePermalink(fgInput.value, bgInput.value);
  // eslint-disable-next-line no-alert
  prompt('Copy this URL to share the current colour combination:', permalink);
});

const transparentHexToSolid = (hex) => {
  if (hex.length === 9) return hex.slice(0, 7);
  return hex;
};

// Reverse colours button.
reverseBtn.addEventListener('click', () => {
  const tempFg = fgInput.value;
  const tempBg = bgInput.value;
  fgInput.value = tempBg;
  bgInput.value = transparentHexToSolid(tempFg);
  fgBtn.style.backgroundColor = tempBg;
  bgBtn.style.backgroundColor = transparentHexToSolid(tempFg);
  fgPicker.color = tempBg;
  bgPicker.color = transparentHexToSolid(tempFg);

  updateUrlParams(fgInput.value, bgInput.value);
  updateRatio();
  updatePreview();
});

// Position popovers.
const positionPopover = (event) => {
  const popover = event.target;
  const invoker = document.querySelector(
    `[popovertarget="${popover.getAttribute('id')}"]`,
  );
  if (event.newState === 'open') {
    computePosition(invoker, popover, { placement: 'bottom-start' }).then(
      ({ x, y }) => {
        Object.assign(popover.style, {
          left: `${x}px`,
          top: `${y}px`,
          opacity: 1,
        });
      },
    );
  }
};
fgPopover.addEventListener('toggle', positionPopover);
bgPopover.addEventListener('toggle', positionPopover);
