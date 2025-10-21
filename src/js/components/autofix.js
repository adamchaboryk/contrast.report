import * as Sa11y from 'sa11y/src/js/utils/contrast-utils.js';
import * as Utils from '../utils/utils.js';
import { synchronizeColors } from './contrast.js';
import Lang from '../utils/lang.js';

const getBetterHex = (isLargeText) => {
  const { fg, bg } = Utils.getDefaultValues();
  const fgRGB = Sa11y.convertToRGBA(fg);
  const bgRGB = Sa11y.convertToRGBA(bg);
  const level = Utils.store.getItem('level') === 'aaa';
  const betterHex = Sa11y.suggestColorWCAG(fgRGB, bgRGB, isLargeText, level);

  if (betterHex.color === null) {
    Utils.createAlert(Lang._('NO_COMBO_FOUND'));
  } else {
    let convertedColor;
    if (fg.startsWith('rgb')) {
      const rgb = Sa11y.convertToRGBA(betterHex.color);
      convertedColor = Utils.toRGBAstring(rgb);
    } else if (fg.startsWith('hsl')) {
      const rgb = Sa11y.convertToRGBA(betterHex.color);
      const formatted = Utils.toRGBAstring(rgb);
      convertedColor = Utils.getRoundedHSLA(formatted);
    } else {
      convertedColor = betterHex.color;
    }
    synchronizeColors(convertedColor, bg);
  }
};

export default function initAutoFix() {
  Utils.getActiveRoot().forEach((root) => {
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
