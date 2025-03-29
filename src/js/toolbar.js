import * as Utils from './utils.js';
import { updateRatio, updatePreview } from './update.js';

export default function initToolbar() {
  // Reverse colours button.
  const reverseBtn = document.getElementById('reverse');
  reverseBtn.addEventListener('click', () => {
    // Retrieve current foreground and background values from localStorage.
    const tempFg = Utils.store.getItem('foreground');
    const tempBg = Utils.store.getItem('background');

    // Reverse the color values.
    // Remove alpha for background.
    const reversedFg = tempBg;
    const reversedBg = Utils.transparentHexToSolid(tempFg);

    function updateInputs(doc) {
      const fgInput = doc.getElementById('fg-input');
      const bgInput = doc.getElementById('bg-input');
      const fgPicker = doc.getElementById('fg-picker');
      const bgPicker = doc.getElementById('bg-picker');
      if (fgInput) fgInput.value = reversedFg;
      if (bgInput) bgInput.value = reversedBg;
      if (fgPicker) fgPicker.value = reversedFg;
      if (bgPicker) bgPicker.value = reversedBg;
    }

    // Update all inputs.
    if (window.documentPictureInPicture?.window?.document) {
      updateInputs(window.documentPictureInPicture.window.document);
    } else {
      updateInputs(document);
    }

    // Update the localStorage values.
    Utils.store.setItem('foreground', reversedFg);
    Utils.store.setItem('background', reversedBg);

    // Update ratio and preview with the reversed colors.
    updateRatio();
    updatePreview();
  });
}
