import * as Sa11y from 'sa11y/src/js/utils/contrast-utils.js';
import Lang from '../utils/lang.js';
import * as Utils from '../utils/utils.js';
import * as Icon from '../utils/icons.js';
import Constants from '../utils/constants.js';
import { updateSaveTextButton } from './swatches.js';

function toggleColorPickers() {
  function handleColor(color, pickerType) {
    const pickerTypes = ['RGB', 'HEX', 'HSL'];
    const picker =
      pickerTypes.find((type) => color.startsWith(type.toLowerCase())) || 'HEX';

    pickerTypes.forEach((type) => {
      Constants.Get[`${pickerType}Picker${type}`].hidden = type !== picker;
    });
  }
  handleColor(Utils.store.getItem('foreground'), 'fg');
  handleColor(Utils.store.getItem('background'), 'bg');
}

// Toggle pass/fail badges.
function togglePassFail(ratio) {
  const thresholds = {
    graphics: 3,
    normal: 4.5,
    large: 3,
    aaanormal: 7,
    aaalarge: 4.5,
    aaagraphics: 3,
  };

  Utils.getActiveRoot().forEach((root) => {
    Object.entries(thresholds).forEach(([className, threshold]) => {
      const elements = root.querySelectorAll(`.${className}`);
      const level = Utils.store.getItem('level');
      elements.forEach((element) => {
        const $el = element;
        const isPass = ratio >= threshold;
        element.classList.toggle('pass', isPass);
        element.classList.toggle('fail', !isPass);

        const isAAA = ['aaanormal', 'aaalarge', 'aaagraphics'].some((cls) =>
          element.classList.contains(cls),
        );

        const passText = `<span class="sr-only">${Lang._('PASSES')}</span>`;
        const failText = `<span class="sr-only">${Lang._('FAILS')}</span>`;

        if (isAAA) {
          $el.innerHTML = isPass
            ? `${passText} AAA ${Icon.check}`
            : `${failText} AAA ${Icon.fail}`;
        } else if (level === 'aaa') {
          $el.innerHTML = isPass
            ? `${passText} AA ${Icon.check}`
            : `${failText} AA ${Icon.fail}`;
        } else {
          $el.innerHTML = isPass
            ? `${Lang._('GOOD')} ${Icon.check}`
            : `${Lang._('LOW')} ${Icon.fail}`;
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
      const truncatedRatio = Math.trunc(contrast.ratio * 10) / 10;
      const formattedRatio = Number.isInteger(truncatedRatio)
        ? truncatedRatio.toFixed(0)
        : truncatedRatio.toFixed(1);
      const ratioHtml = `${formattedRatio}<span class="divider">:</span>1`;

      Utils.getActiveRoot().forEach((root) => {
        // Update ratios.
        root.querySelectorAll('.get-ratio').forEach((node) => {
          const ratioContainer = node;
          ratioContainer.innerHTML = ratioHtml;
        });

        const level = Utils.store.getItem('level');
        const normalThreshold = level === 'aa' ? 4.5 : 7;
        const largeThreshold = level === 'aa' ? 3 : 4.5;

        // Show/hide normal fix button.
        root.querySelectorAll('.normal-fix').forEach((node) => {
          const btn = node;
          btn.style.display = window.ratio > normalThreshold ? 'none' : '';
        });

        // Show/hide large fix button.
        root.querySelectorAll('.large-fix').forEach((node) => {
          const btn = node;
          btn.style.display = window.ratio > largeThreshold ? 'none' : '';
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
        '#normal-preview, #large-preview, #graphics-text',
      );
      const thresholds = {
        'large-preview': {
          value: 3,
          goodKey: 'CONTRAST_LARGE_GOOD',
          lowKey: 'CONTRAST_LARGE_LOW',
        },
        'graphics-text': {
          value: 3,
          goodKey: 'CONTRAST_GRAPHICS_GOOD',
          lowKey: 'CONTRAST_GRAPHICS_LOW',
        },
        default: {
          value: 4.5,
          goodKey: 'CONTRAST_NORMAL_GOOD',
          lowKey: 'CONTRAST_NORMAL_LOW',
        },
      };

      textPreviews.forEach((preview) => {
        const { id } = preview;
        const config = thresholds[id] || thresholds.default;
        const key =
          formattedRatio >= config.value ? config.goodKey : config.lowKey;
        const p = preview;
        p.innerHTML = Lang.sprintf(key, fg, formattedRatio, bg);
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
  Utils.getActiveRoot().forEach((root) => {
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
  if (validColor === 'unsupported') {
    Utils.createAlert(Lang._('UNSUPPORTED_COLOUR_SPACE'));
  }
  return validColor;
}

function validateBackgroundColor(color) {
  let validColor = color;
  // Strip alpha from background.
  validColor = Sa11y.convertToRGBA(color).slice(0, -1);
  if (validColor === 'unsupported') {
    Utils.createAlert(Lang._('UNSUPPORTED_COLOUR_SPACE'));
  }
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
  if (background) validBg = validateBackgroundColor(background);

  const roots = Utils.getActiveRoot();
  const rootsArray = Array.isArray(roots) ? roots : [roots];
  rootsArray.forEach((root) => {
    const fgInput = root.getElementById('fg-input');
    const bgInput = root.getElementById('bg-input');
    const fgPicker = root.getElementById('fg-picker-native');
    const bgPicker = root.getElementById('bg-picker-native');
    const fgPickerHex = root.querySelector('hex-alpha-color-picker');
    const bgPickerHex = root.querySelector('hex-color-picker');
    const fgPreviewBtn = root.getElementById('fg-btn');
    const bgPreviewBtn = root.getElementById('bg-btn');

    // Text input.
    if (fgInput && foreground) fgInput.value = foreground;
    if (bgInput && background) bgInput.value = background;

    // Native colour inputs.
    if (fgPicker && foreground) fgPicker.value = Sa11y.getHex(validFg);
    if (bgPicker && background) bgPicker.value = Sa11y.getHex(validBg);

    // Default/custom colour picker value.
    if (fgPickerHex && foreground) {
      fgPickerHex.color = Utils.RGBAToHexA(validFg);
    }
    if (bgPickerHex && background) {
      bgPickerHex.color = Sa11y.getHex(validBg);
    }

    // Custom colour picker button toggle.
    if (fgPreviewBtn && foreground)
      fgPreviewBtn.style.background = Sa11y.getHex(validFg);
    if (bgPreviewBtn && background)
      bgPreviewBtn.style.background = Sa11y.getHex(validBg);
  });

  // Update the localStorage values.
  if (foreground) Utils.store.setItem('foreground', foreground);
  if (background) Utils.store.setItem('background', background);

  // Update ratio & preview areas once synchronized.
  setTimeout(() => {
    updatePreview();
    updateRatio();
    toggleColorPickers();
  }, 0);

  // Clear URL params when user starts interacting with the picker.
  window.history.replaceState(null, '', window.location.pathname);

  // Clear alerts.
  Utils.clearAlert();

  // Reset "Save" button
  updateSaveTextButton();
}

export default function initColorInputs() {
  // Query pickers and inputs.
  const fgInput = document.getElementById('fg-input');
  const bgInput = document.getElementById('bg-input');
  const fgPicker = document.getElementById('fg-picker-native');
  const bgPicker = document.getElementById('bg-picker-native');

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

  // Update colour pickers once everything is initialized.
  toggleColorPickers();
}
