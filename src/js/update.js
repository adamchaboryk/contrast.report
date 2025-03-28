import * as Sa11y from 'sa11y/src/js/utils/contrast-utils.js';
import { store } from 'sa11y/src/js/utils/utils.js';

// Calculate contrast.
export function updateRatio() {
  const fgColor = store.getItem('foreground');
  const bgColor = store.getItem('background');

  // Calculate contrast with Sa11y.
  const contrast = Sa11y.calculateContrast(
    Sa11y.convertToRGBA(fgColor),
    Sa11y.convertToRGBA(bgColor),
  );

  const permalinkBtn = document.getElementById('permalink');

  // && chroma.valid(fgColor) && chroma.valid(bgColor)
  // To-do: use chroma valid for when color does not start with color-mix();

  if (contrast !== null) {
    if (!Number.isNaN(contrast.ratio) && Number.isFinite(contrast.ratio)) {
      const formattedRatio = Number.isInteger(contrast.ratio)
        ? contrast.ratio.toFixed(0)
        : contrast.ratio.toFixed(2);
      const ratioHtml = `<div id="ratio">${formattedRatio}<span class="divider">:</span>1</div>`;

      const ratioContainer = (
        window.documentPictureInPicture?.window?.document || document
      ).getElementById('ratio-container');
      if (ratioContainer) ratioContainer.innerHTML = ratioHtml;

      // Show permalink button if valid colour.
      permalinkBtn.removeAttribute('hidden');

      // Store colour in localstorage.
      store.setItem('foreground', fgColor);
      store.setItem('background', bgColor);
    }
  } else {
    document.getElementById('ratio-container').innerHTML = '';
    // reverseBtn.toggleAttribute('hidden', true);
    permalinkBtn.toggleAttribute('hidden', true);
  }

  // Clear URL params when user starts interacting with the picker.
  window.history.replaceState(null, '', window.location.pathname);
}

// Update preview.
export function updatePreview() {
  const fgColor = store.getItem('foreground');
  const bgColor = store.getItem('background');

  const elements = ['normal', 'large', 'icons', 'preview'];
  elements.forEach((id) => {
    const element = document.getElementById(id);
    element.style.color = fgColor;
    element.style.backgroundColor = bgColor;
  });

  const pipPreview =
    window.documentPictureInPicture.window?.document.getElementById('preview');
  if (pipPreview) {
    pipPreview.style.color = fgColor;
    pipPreview.style.backgroundColor = bgColor;
  }
}
