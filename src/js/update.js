import * as Sa11y from 'sa11y/src/js/utils/contrast-utils.js';
import * as Utils from './utils.js';

function togglePassFail(ratio) {
  const thresholds = {
    graphics: 3,
    normal: 4.5,
    large: 3,
  };

  Object.entries(thresholds).forEach(([id, threshold]) => {
    const root = window.documentPictureInPicture?.window?.document || document;
    const element = root.getElementById(id);
    if (element) {
      const isPass = ratio >= threshold;
      element.classList.toggle('pass', isPass);
      element.classList.toggle('fail', !isPass);
      element.textContent = isPass ? 'Good' : `Fail`;
    }
  });
}

// Calculate contrast.
export function updateRatio() {
  const { fg, bg } = Utils.getDefaultValues();

  // Calculate contrast with Sa11y.
  const contrast = Sa11y.calculateContrast(
    Sa11y.convertToRGBA(fg),
    Sa11y.convertToRGBA(bg),
  );

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

      // Toggle pass/fail badges.
      togglePassFail(contrast.ratio);

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
  } else {
    document.getElementById('ratio-container').innerHTML = '';
  }
}

// Update preview.
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

  // Update tab & pip document.
  const roots = [
    document,
    window.documentPictureInPicture?.window?.document,
  ].filter(Boolean);

  // For each root, modify preview area colours.
  roots.forEach((root) => {
    elements.forEach((id) => {
      const element = root.getElementById(id);
      if (element) {
        element.style.color = fgColor;
        element.style.backgroundColor = bgColor;
      }
    });
  });
}
