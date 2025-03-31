import * as Sa11y from 'sa11y/src/js/utils/contrast-utils.js';
import { getActiveRoot } from './picture-in-picture.js';
import * as Utils from '../utils/utils.js';
import * as Icon from '../utils/icons.js';
import { updateSaveTextButton } from './swatches.js';

// Toggle pass/fail badges.
function togglePassFail(ratio) {
  const thresholds = {
    graphics: 3,
    normal: 4.5,
    large: 3,
    aaanormal: 7,
    aaalarge: 4.5,
  };

  getActiveRoot().forEach((root) => {
    Object.entries(thresholds).forEach(([className, threshold]) => {
      const elements = root.querySelectorAll(`.${className}`);
      elements.forEach((element) => {
        const $el = element;
        const isPass = ratio >= threshold;
        element.classList.toggle('pass', isPass);
        element.classList.toggle('fail', !isPass);

        const aaa =
          element.classList.contains('aaanormal') ||
          element.classList.contains('aaalarge');

        if (aaa) {
          $el.innerHTML = isPass ? `AAA ${Icon.check}` : `AAA ${Icon.fail}`;
        } else {
          $el.innerHTML = isPass ? `AA ${Icon.check}` : `AA ${Icon.fail}`;
        }
      });
    });

    // Give red badge if falls below 3.
    root.querySelectorAll('.get-ratio').forEach((ratioContainer) => {
      ratioContainer.classList.toggle('fail', ratio < 3);
    });
  });
}

// Calculate contrast and update contrast ratios.
function updateRatio() {
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

        text.innerHTML = `${fg} has a ${contrastStatus} contrast ratio of ${formattedRatio}:1 with the background (${bg}) for ${textType} size text.`;
      });
    }
  }
}

// Update preview areas.
function updatePreview() {
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

function validateColor(color) {
  let validColor = color;
  validColor = Sa11y.convertToRGBA(color);
  validColor = Sa11y.getHex(validColor);
  return validColor;
}

/**
 * Synchronize inputs and save colours to local storage.
 * @param {String} foreground colour.
 * @param {String} background colour.
 */
export function synchronizeColors(foreground, background) {
  let validFg = foreground;
  let validBg = background;

  if (foreground) validFg = validateColor(foreground);
  if (background) validBg = validateColor(background);

  const roots = getActiveRoot();
  const rootsArray = Array.isArray(roots) ? roots : [roots];
  rootsArray.forEach((root) => {
    const fgInput = root.getElementById('fg-input');
    const bgInput = root.getElementById('bg-input');
    const fgPicker = root.getElementById('fg-picker');
    const bgPicker = root.getElementById('bg-picker');

    if (fgInput && foreground) fgInput.value = foreground;
    if (bgInput && background) bgInput.value = background;

    // We need validated hexcode for colour inputs.
    if (fgPicker && foreground) fgPicker.value = validFg;
    if (bgPicker && background) bgPicker.value = validBg;
  });

  // Update the localStorage values.
  if (foreground) Utils.store.setItem('foreground', validFg);
  if (background) Utils.store.setItem('background', validBg);

  // Update ratio & preview areas once synchronized.
  updatePreview();
  updateRatio();

  // Clear URL params when user starts interacting with the picker.
  window.history.replaceState(null, '', window.location.pathname);

  // Reset "Save" button
  updateSaveTextButton();
}

export default function initColorInputs() {
  // Query pickers and inputs.
  const fgInput = document.getElementById('fg-input');
  const bgInput = document.getElementById('bg-input');
  const fgPicker = document.getElementById('fg-picker');
  const bgPicker = document.getElementById('bg-picker');

  // Register event listeners.
  fgPicker.addEventListener('input', () => {
    const fgColor = Utils.normalizeColorInput(fgPicker.value);
    synchronizeColors(fgColor, false);
  });
  fgInput.addEventListener('input', () => {
    const fgColor = Utils.normalizeColorInput(fgInput.value);
    synchronizeColors(fgColor, false);
  });
  bgPicker.addEventListener('input', () => {
    const bgColor = Utils.normalizeColorInput(bgPicker.value);
    synchronizeColors(false, bgColor);
  });
  bgInput.addEventListener('input', () => {
    const bgColor = Utils.normalizeColorInput(bgInput.value);
    synchronizeColors(false, bgColor);
  });

  // Update ratio once everything is initialized.
  updateRatio();
}
