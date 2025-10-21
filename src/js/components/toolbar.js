import * as Sa11y from 'sa11y/src/js/utils/contrast-utils.js';
import Lang from '../utils/lang.js';
import * as Utils from '../utils/utils.js';
import { synchronizeColors } from './contrast.js';

export default function initToolbar() {
  /**
   * Toggle: Reverse colours.
   */
  const reverseBtn = document.getElementById('reverse');
  reverseBtn.addEventListener('click', () => {
    // Retrieve current foreground and background values from localStorage.
    const tempFg = Utils.store.getItem('foreground');
    const tempBg = Utils.store.getItem('background');

    // Reverse the color values & remove alpha for background.
    const reversedFg = tempBg;
    let reversedBg;
    if (tempFg.startsWith('rgb')) {
      const rgb = Sa11y.convertToRGBA(tempFg).slice(0, -1);
      reversedBg = Utils.toRGBstring(rgb);
    } else if (tempFg.startsWith('hsl')) {
      const rgb = Sa11y.convertToRGBA(tempFg);
      const formatted = Utils.toRGBAstring(rgb);
      reversedBg = Utils.getRoundedHSLA(formatted);
    } else {
      reversedBg = Utils.transparentHexToSolid(tempFg);
    }

    // Update all inputs.
    synchronizeColors(reversedFg, reversedBg);
  });

  /**
   * Toggle: Permalink
   */
  const permalinkBtn = document.getElementById('permalink');
  permalinkBtn.addEventListener('click', () => {
    const fg = Utils.store.getItem('foreground') || '#ffffff';
    const bg = Utils.store.getItem('background') || '#000000';
    const baseUrl = window.location.origin + window.location.pathname;
    const permalink = `${baseUrl}?fg=${encodeURIComponent(fg)}&bg=${encodeURIComponent(bg)}`;
    window.focus();
    setTimeout(() => {
      navigator.clipboard
        .writeText(permalink)
        .then(() => {
          Utils.createAlert(Lang._('LINK_COPIED'));
        })
        .catch((error) => {
          console.error('Failed to copy:', error);
        });
    }, 100);
  });

  /**
   * Toggle: Dark Mode
   * Credits: Derek Kedziora
   * @link https://derekkedziora.com/blog/dark-mode-revisited
   */
  const systemInitiatedDark = window.matchMedia('(prefers-color-scheme: dark)');
  const systemInitiatedDarkPiP =
    window.documentPictureInPicture?.window?.matchMedia(
      '(prefers-color-scheme: dark)',
    );
  const themeToggle = document.getElementById('theme');
  const storeTheme = (theme) => {
    const picInPictureDoc = window.documentPictureInPicture?.window?.document;
    if (picInPictureDoc) {
      picInPictureDoc.documentElement.setAttribute('data-theme', theme);
    }

    document.documentElement.setAttribute('data-theme', theme);
    Utils.store.setItem('theme', theme);
    themeToggle.setAttribute(
      'aria-pressed',
      theme === 'dark' ? 'true' : 'false',
    );
  };

  // Initial theme setup.
  const initialTheme =
    Utils.store.getItem('theme') ||
    (systemInitiatedDark.matches ? 'dark' : 'light');
  storeTheme(initialTheme);

  // Listen to system theme changes.
  systemInitiatedDark.addEventListener('change', () => {
    storeTheme(systemInitiatedDark.matches ? 'dark' : 'light');
  });

  if (window.documentPictureInPicture) {
    systemInitiatedDarkPiP?.addEventListener('change', () => {
      storeTheme(systemInitiatedDarkPiP.matches ? 'dark' : 'light');
    });
  }

  // Toggle theme on based on toggle switch.
  themeToggle.onclick = () => {
    const currentTheme =
      Utils.store.getItem('theme') ||
      (systemInitiatedDark.matches ? 'dark' : 'light');
    const preferredTheme = currentTheme === 'dark' ? 'light' : 'dark';
    storeTheme(preferredTheme);
  };

  /**
   * Toggle: WCAG Level
   */
  const level = document.getElementById('level');
  level.addEventListener('click', () => {
    const wcagLevel = Utils.store.getItem('level');
    Utils.getActiveRoot().forEach((root) => {
      const aaaBadges = root.querySelectorAll(
        '.aaanormal, .aaalarge, .aaagraphics',
      );
      if (wcagLevel === 'aa') {
        Utils.store.setItem('level', 'aaa');
        level.textContent = 'WCAG AAA';
        aaaBadges.forEach((badge) => {
          badge.removeAttribute('hidden');
        });
      } else {
        Utils.store.setItem('level', 'aa');
        level.textContent = 'WCAG AA';
        aaaBadges.forEach((badge) => {
          badge.setAttribute('hidden', '');
        });
      }
    });
    synchronizeColors();
  });
}
