export default function initUnsupported() {
  // Warning if using unsupported browser.
  if (!window.EyeDropper || !window.documentPictureInPicture) {
    const h1 = document.querySelector('h1');
    const unsupported = document.createElement('section');
    unsupported.setAttribute('aria-labelledby', 'unsupported-heading');
    unsupported.id = 'unsupported-warning';
    unsupported.innerHTML = `
      <h2 id="unsupported-heading">Warning</h2>
      <p>Sorry! This website uses experimental technologies that are only available in Google Chrome or Microsoft Edge.</p>
    `;
    if (h1) h1.insertAdjacentElement('afterend', unsupported);

    if (!window.documentPictureInPicture) {
      // Hide PiP button.
      const pipButton = document.getElementById('pip-btn');
      pipButton.classList.add('unsupported');
    }
  }
}
