import Lang from '../utils/lang.js';

export default function initUnsupported() {
  // Warning if using unsupported browser.
  if (!window.EyeDropper || !window.documentPictureInPicture) {
    const about = document.getElementById('about');
    const unsupported = document.createElement('section');
    unsupported.setAttribute('aria-labelledby', 'unsupported-heading');
    unsupported.id = 'unsupported-warning';
    unsupported.role = 'alert';
    unsupported.innerHTML = `
      <h2 id="unsupported-heading">${Lang._('NOT_AVAILABLE')}</h2>
      <p>${Lang._('NOT_AVAILABLE_BODY')}</p>
    `;
    if (about) about.insertAdjacentElement('beforebegin', unsupported);

    if (!window.documentPictureInPicture) {
      // Hide PiP button.
      const pipButton = document.getElementById('pip-btn');
      pipButton.classList.add('unsupported');
    }
  }
}
