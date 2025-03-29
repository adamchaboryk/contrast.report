import { store } from './utils.js';

export default function initTheme() {
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
    store.setItem('theme', theme);
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
    store.getItem('theme') || (systemInitiatedDark.matches ? 'dark' : 'light');
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
      store.getItem('theme') ||
      (systemInitiatedDark.matches ? 'dark' : 'light');
    const preferredTheme = currentTheme === 'dark' ? 'light' : 'dark';
    storeTheme(preferredTheme);
  };
}
