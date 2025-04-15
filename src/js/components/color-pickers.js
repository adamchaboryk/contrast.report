import { synchronizeColors } from './contrast.js';
import { createPopover } from '../utils/popover.js';
import Constants from '../utils/constants.js';

export default function initColorPickers() {
  // Initialize popovers for color pickers.
  const fgBtn = document.getElementById('fg-btn');
  const bgBtn = document.getElementById('bg-btn');
  const fgPopover = createPopover(fgBtn, document.getElementById('fg-popover'));
  const bgPopover = createPopover(bgBtn, document.getElementById('bg-popover'));
  fgBtn.addEventListener('click', fgPopover.toggle);
  bgBtn.addEventListener('click', bgPopover.toggle);

  // Initialize foreground pickers.
  const foregroundPickers = [
    Constants.Get.fgPickerHEX,
    Constants.Get.fgPickerRGB,
    Constants.Get.fgPickerHSL,
  ];
  foregroundPickers.forEach((picker) => {
    picker.addEventListener('color-changed', (event) => {
      synchronizeColors(event.detail.value, false);
    });
  });

  // Initialize background pickers.
  const backgroundPickers = [
    Constants.Get.bgPickerHEX,
    Constants.Get.bgPickerRGB,
    Constants.Get.bgPickerHSL,
  ];
  backgroundPickers.forEach((picker) => {
    picker.addEventListener('color-changed', (event) => {
      synchronizeColors(false, event.detail.value);
    });
  });

  /**
   * Accessibility: Give better focus outlines to colour pickers.
   */
  const allPickers = backgroundPickers.concat(foregroundPickers);
  allPickers.forEach((picker) => {
    if (picker.shadowRoot) {
      const style = document.createElement('style');
      style.textContent = `
        [role='slider']:focus [part$='pointer'] {
          outline: solid var(--ui-focus) 5px;
        }
        [role='slider'] [part$='pointer'] {
          border: 2px solid #ffffff;
          box-shadow: 0px 0px 0px 2px var(--ui-border);
        }
      `;
      picker.shadowRoot.appendChild(style);
    }
  });
}
