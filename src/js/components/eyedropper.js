/* eslint-disable no-undef */
import { synchronizeColors } from './contrast.js';
import * as Utils from '../utils/utils.js';

export default function initEyeDropper() {
  // Check if the EyeDropper API is available
  if (window.EyeDropper) {
    const eyeDropper = new window.EyeDropper();

    Utils.getActiveRoot().forEach((root) => {
      const eyeDropperFg = root.getElementById('fg-eyedropper');
      if (!eyeDropperFg) return;
      eyeDropperFg.addEventListener('click', async () => {
        try {
          const { sRGBHex } = await eyeDropper.open();
          const fgPicker = root.getElementById('fg-picker');
          const fgInput = root.getElementById('fg-input');
          const miniPreview = root.getElementById('mini-preview');

          if (fgPicker) fgPicker.value = sRGBHex;
          if (fgInput) fgInput.value = sRGBHex;
          if (miniPreview) miniPreview.style.color = sRGBHex;

          synchronizeColors(sRGBHex, false);
        } catch (err) {
          console.error('EyeDropper failed:', err);
        }
      });

      const bgEyeDropper = document.getElementById('bg-eyedropper');
      if (bgEyeDropper) {
        bgEyeDropper.addEventListener('click', async () => {
          try {
            const { sRGBHex } = await eyeDropper.open();
            const bgPicker = root.getElementById('bg-picker');
            const bgInput = root.getElementById('bg-input');
            const miniPreview = root.getElementById('mini-preview');

            if (bgPicker) bgPicker.value = sRGBHex;
            if (bgInput) bgInput.value = sRGBHex;
            if (miniPreview) miniPreview.style.backgroundColor = sRGBHex;

            synchronizeColors(false, sRGBHex);
          } catch (err) {
            console.error('EyeDropper failed:', err);
          }
        });
      }
    });
  } else {
    console.warn('EyeDropper API is not supported in this browser.');

    const fg = document.getElementById('fg-eyedropper');
    const bg = document.getElementById('bg-eyedropper');
    [fg, bg].forEach((picker) => {
      const eyedropper = picker;
      eyedropper.style.display = 'none';
    });

    const pickers = document.querySelectorAll('input[type="text"]');
    pickers.forEach((input) => {
      input.classList.add('eyedropper-not-supported');
    });
  }
}
