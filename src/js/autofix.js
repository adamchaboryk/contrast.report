import * as Sa11y from 'sa11y/src/js/utils/contrast-utils.js';
import * as Utils from './utils.js';
import { updatePreview, updateRatio, synchronizeColors } from './update.js';
import { getActiveRoot } from './pip.js';

const getBetterHex = (isLargeText) => {
  const { fg, bg } = Utils.getDefaultValues();
  const fgRGB = Sa11y.convertToRGBA(fg);
  const bgRGB = Sa11y.convertToRGBA(bg);
  const betterHex = Sa11y.suggestColorWCAG(fgRGB, bgRGB, isLargeText);
  Utils.store.setItem('foreground', betterHex.color);
  synchronizeColors(betterHex.color, bg);
  updatePreview();
  updateRatio();
};

export default function initAutoFix() {
  getActiveRoot().forEach((root) => {
    root.querySelectorAll('.normal-fix').forEach((btn) => {
      btn.addEventListener('click', () => getBetterHex(false));
    });

    root.querySelectorAll('.large-fix').forEach((btn) => {
      btn.addEventListener('click', () => getBetterHex(true));
    });

    root.querySelectorAll('.graphics-fix').forEach((btn) => {
      btn.addEventListener('click', () => getBetterHex(true));
    });
  });
}
