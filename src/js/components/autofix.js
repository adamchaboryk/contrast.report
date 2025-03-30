import * as Sa11y from 'sa11y/src/js/utils/contrast-utils.js';
import * as Utils from '../utils/utils.js';
import { synchronizeColors } from '../update.js';
import { getActiveRoot } from './picture-in-picture.js';

const getBetterHex = (isLargeText) => {
  const { fg, bg } = Utils.getDefaultValues();
  const fgRGB = Sa11y.convertToRGBA(fg);
  const bgRGB = Sa11y.convertToRGBA(bg);
  const betterHex = Sa11y.suggestColorWCAG(fgRGB, bgRGB, isLargeText);
  synchronizeColors(betterHex.color, bg);
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
