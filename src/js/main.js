import '../styles/reset.css';
import '../styles/style.css';
import '@oddbird/popover-polyfill';
import 'vanilla-colorful/hex-color-picker.js';
import 'vanilla-colorful/hex-alpha-color-picker.js';
import { computePosition } from '@floating-ui/dom';
import * as Sa11yContrastUtils from 'sa11y/src/js/utils/contrast-utils.js';
import { bell, check, cart, cloud, trash, cc } from './icons.js';

// Function to get URL parameters
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    fg: `#${params.get('fg') || 'ffffff'}`,
    bg: `#${params.get('bg') || '000000'}`,
  };
}

// Function to update URL parameters
function updateUrlParams(fg, bg) {
  const params = new URLSearchParams(window.location.search);
  params.set('fg', fg.replace('#', ''));
  params.set('bg', bg.replace('#', ''));
  window.history.replaceState({}, '', `?${params.toString()}`);
}

// Get initial values
const { fg, bg } = getUrlParams();

// Render UI
document.querySelector('#app').innerHTML = `
  <main>
    <h1>Contrast Ratio <div id="ratio"></div></h1>
     <div id="toolbar">
      <button type="button" id="reverse">Reverse</button>
    </div>
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
            <hex-alpha-color-picker id="fg-picker" color="${fg}"></hex-alpha-color-picker>
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
            <hex-color-picker id="bg-picker" color="${bg}"></hex-color-picker>
          </div>
          <input type="text" id="bg-input" value="${bg}">
        </div>
      </div>
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

    <h3>Non-text & UI</h3>
    <div id="icons" class="card" style="color: ${fg}; background-color: ${bg}">
      ${bell + check + cart + cloud + trash + cc}
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
// const improveBtn = document.getElementById('improve');

// Calculate contrast.
const updateRatio = () => {
  const contrast = Sa11yContrastUtils.calculateContrast(
    Sa11yContrastUtils.convertToRGBA(fgInput.value),
    Sa11yContrastUtils.convertToRGBA(bgInput.value),
  );
  const ratio = document.getElementById('ratio');
  ratio.innerHTML = `${contrast.ratio.toFixed(2)}<span class="divider">:</span>1`;
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
};

// Foreground event listeners
fgPicker.addEventListener('color-changed', (event) => {
  const color = event.detail.value;
  fgInput.value = color;
  fgBtn.style.backgroundColor = color;
  updateUrlParams(color, bgInput.value);
  updateRatio();
  updatePreview();
});

fgInput.addEventListener('input', () => {
  fgPicker.color = fgInput.value;
  updateUrlParams(fgInput.value, bgInput.value);
});

// Background event listeners
bgPicker.addEventListener('color-changed', (event) => {
  const color = event.detail.value;
  bgInput.value = color;
  bgBtn.style.backgroundColor = color;
  updateUrlParams(fgInput.value, color);
  updateRatio();
  updatePreview();
});

bgInput.addEventListener('input', () => {
  bgPicker.color = bgInput.value;
  updateUrlParams(fgInput.value, bgInput.value);
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

/* Improve button.
improveBtn.addEventListener('click', () => {
  updateUrlParams(fgInput.value, bgInput.value);
  updateRatio();
  updatePreview();
}); */

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
