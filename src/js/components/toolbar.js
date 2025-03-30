import * as Utils from '../utils/utils.js';
import { synchronizeColors } from '../update.js';

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
    const reversedBg = Utils.transparentHexToSolid(tempFg);

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
    navigator.clipboard
      .writeText(permalink)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Link copied!');
      })
      .catch((err) => console.error('Failed to copy:', err));
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
    // const icon = themeToggle.querySelector('span').classList;
    // icon.toggle('moon-icon', theme === 'light');
    // icon.toggle('sun-icon', theme === 'dark');
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
}
