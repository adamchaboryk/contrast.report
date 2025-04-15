export default function initUnsupported() {
  // Warning if using unsupported browser.
  if (!window.EyeDropper || !window.documentPictureInPicture) {
    const about = document.getElementById('about');
    const unsupported = document.createElement('section');
    unsupported.setAttribute('aria-labelledby', 'unsupported-heading');
    unsupported.id = 'unsupported-warning';
    unsupported.role = 'alert';
    unsupported.innerHTML = `
      <h2 id="unsupported-heading">Some features are not available</h2>
      <p>This website uses experimental technologies (like Picture-in-Picture mode and colour pickers) that are not available in your browser. Consider using Google Chrome or Microsoft Edge for a better experience!</p>
    `;
    if (about) about.insertAdjacentElement('beforebegin', unsupported);

    if (!window.documentPictureInPicture) {
      // Hide PiP button.
      const pipButton = document.getElementById('pip-btn');
      pipButton.classList.add('unsupported');
    }
  }
}
