import * as Sa11y from 'sa11y/src/js/utils/contrast-utils.js';
import chroma from 'chroma-js';
import { getActiveRoot } from './pip.js';
import * as Utils from './utils.js';

// Toggle pass/fail badges.
const togglePassFail = (ratio) => {
  const thresholds = {
    graphics: 3,
    normal: 4.5,
    large: 3,
  };

  getActiveRoot().forEach((root) => {
    Object.entries(thresholds).forEach(([className, threshold]) => {
      const elements = root.querySelectorAll(`.${className}`);
      elements.forEach((element) => {
        const $el = element;
        const isPass = ratio >= threshold;
        element.classList.toggle('pass', isPass);
        element.classList.toggle('fail', !isPass);
        $el.textContent = isPass ? 'Good' : 'Low';
      });
    });

    // Give red badge if falls below 3.
    root.querySelectorAll('.get-ratio').forEach((ratioContainer) => {
      ratioContainer.classList.toggle('fail', ratio < 3);
    });
  });
};

// Calculate contrast and update contrast ratios.
export function updateRatio() {
  const { fg, bg } = Utils.getDefaultValues();

  // Calculate contrast with Sa11y.
  const contrast = Sa11y.calculateContrast(
    Sa11y.convertToRGBA(fg),
    Sa11y.convertToRGBA(bg),
  );

  window.ratio = contrast.ratio;

  if (contrast !== null) {
    if (!Number.isNaN(contrast.ratio) && Number.isFinite(contrast.ratio)) {
      const formattedRatio = Number.isInteger(contrast.ratio)
        ? contrast.ratio.toFixed(0)
        : contrast.ratio.toFixed(2);
      const ratioHtml = `${formattedRatio}<span class="divider">:</span>1`;

      getActiveRoot().forEach((root) => {
        // Update ratios.
        root.querySelectorAll('.get-ratio').forEach((node) => {
          const ratioContainer = node;
          ratioContainer.innerHTML = ratioHtml;
        });

        // Show/hide normal fix button.
        root.querySelectorAll('.normal-fix').forEach((node) => {
          const btn = node;
          btn.style.display = window.ratio > 4.5 ? 'none' : '';
        });

        // Show/hide large fix button.
        root.querySelectorAll('.large-fix').forEach((node) => {
          const btn = node;
          btn.style.display = window.ratio > 3 ? 'none' : '';
        });

        // Show/hide graphics fix button.
        root.querySelectorAll('.graphics-fix').forEach((node) => {
          const btn = node;
          btn.style.display = window.ratio > 3 ? 'none' : '';
        });
      });

      // Toggle pass/fail badges.
      togglePassFail(contrast.ratio);

      // Update preview text areas.
      const textPreviews = document.querySelectorAll(
        '#normal-preview, #large-preview',
      );
      textPreviews.forEach((preview) => {
        const text = preview;
        const isLargeText = preview.id === 'large-preview';
        const textType = isLargeText ? 'large' : 'normal';
        const contrastThreshold = isLargeText ? 3 : 4.5;
        const contrastStatus =
          formattedRatio >= contrastThreshold ? 'good' : 'low';

        text.innerHTML = `The colour (${fg}) has a ${contrastStatus} contrast ratio of ${formattedRatio}:1 with the background (${bg}) for ${textType} size text.`;
      });
    }
  }
}

// Update preview areas.
export function updatePreview() {
  const fgColor = Utils.store.getItem('foreground');
  const bgColor = Utils.store.getItem('background');

  // Preview IDs.
  const elements = [
    'normal-preview',
    'large-preview',
    'graphics-preview',
    'mini-preview',
  ];

  // For each root, modify preview area colours.
  getActiveRoot().forEach((root) => {
    elements.forEach((id) => {
      const element = root.getElementById(id);
      if (element) {
        element.style.color = fgColor;
        element.style.backgroundColor = bgColor;
      }
    });
  });
}

export function synchronizeColors(foreground, background) {
  const roots = getActiveRoot();
  const rootsArray = Array.isArray(roots) ? roots : [roots];
  rootsArray.forEach((root) => {
    const fgInput = root.getElementById('fg-input');
    const bgInput = root.getElementById('bg-input');
    const fgPicker = root.getElementById('fg-picker');
    const bgPicker = root.getElementById('bg-picker');
    if (fgInput) fgInput.value = foreground;
    if (bgInput) bgInput.value = background;
    if (fgPicker) fgPicker.value = foreground;
    if (bgPicker) bgPicker.value = background;
  });
}

export function initEventListeners() {
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

  // Elements.
  const fgInput = document.getElementById('fg-input');
  const bgInput = document.getElementById('bg-input');
  const fgPicker = document.getElementById('fg-picker');
  const bgPicker = document.getElementById('bg-picker');

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
}
