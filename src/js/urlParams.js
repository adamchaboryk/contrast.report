import { store } from 'sa11y/src/js/utils/utils.js';

export default function initPermalink() {
  // Permalink button listener
  const permalinkBtn = document.getElementById('permalink');
  permalinkBtn.addEventListener('click', () => {
    const fg = store.getItem('foreground') || '#ffffff';
    const bg = store.getItem('background') || '#000000';
    const baseUrl = window.location.origin + window.location.pathname;
    const permalink = `${baseUrl}?fg=${encodeURIComponent(fg)}&bg=${encodeURIComponent(bg)}`;
    // eslint-disable-next-line no-alert
    prompt('Copy this URL to share the current colour combination:', permalink);
  });
}
