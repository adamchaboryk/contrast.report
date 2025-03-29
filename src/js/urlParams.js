import { store } from 'sa11y/src/js/utils/utils.js';

function showPopup(message) {
  const popup = document.createElement('div');
  popup.textContent = message;
  popup.style.position = 'fixed';
  popup.style.bottom = '20px';
  popup.style.right = '20px';
  popup.style.background = 'black';
  popup.style.color = 'white';
  popup.style.padding = '10px 15px';
  popup.style.borderRadius = '5px';
  popup.style.opacity = '1';
  popup.style.transition = 'opacity 0.5s ease';

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = '0';
    setTimeout(() => document.body.removeChild(popup), 500);
  }, 1500);
}

export default function initPermalink() {
  const permalinkBtn = document.getElementById('permalink');
  permalinkBtn.addEventListener('click', () => {
    const fg = store.getItem('foreground') || '#ffffff';
    const bg = store.getItem('background') || '#000000';
    const baseUrl = window.location.origin + window.location.pathname;
    const permalink = `${baseUrl}?fg=${encodeURIComponent(fg)}&bg=${encodeURIComponent(bg)}`;

    navigator.clipboard
      .writeText(permalink)
      .then(() => {
        showPopup('Link copied!');
      })
      .catch((err) => console.error('Failed to copy:', err));
  });
}
