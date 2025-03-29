import { store } from 'sa11y/src/js/utils/utils';
import { updateRatio, updatePreview } from './update.js';

export default function initEyeDropper() {
  // Check if the EyeDropper API is available
  if (window.EyeDropper) {
    // eslint-disable-next-line no-undef
    const eyeDropper = new EyeDropper();
    document
      .getElementById('fg-eyedropper')
      .addEventListener('click', async () => {
        try {
          const result = await eyeDropper.open();
          const root =
            window.documentPictureInPicture.window?.document || document;
          root.getElementById('fg-picker').value = result.sRGBHex;
          root.getElementById('fg-input').value = result.sRGBHex;
          root.getElementById('mini-preview').style.color = result.sRGBHex;
          store.setItem('foreground', result.sRGBHex);
          updateRatio();
          updatePreview();
        } catch (err) {
          console.error('EyeDropper failed:', err);
        }
      });

    document
      .getElementById('bg-eyedropper')
      .addEventListener('click', async () => {
        try {
          const result = await eyeDropper.open();
          const root =
            window.documentPictureInPicture.window?.document || document;
          root.getElementById('bg-picker').value = result.sRGBHex;
          root.getElementById('bg-input').value = result.sRGBHex;
          root.getElementById('mini-preview').style.backgroundColor =
            result.sRGBHex;
          store.setItem('background', result.sRGBHex);
          updateRatio();
          updatePreview();
        } catch (err) {
          console.error('EyeDropper failed:', err);
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
