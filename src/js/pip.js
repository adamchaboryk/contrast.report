// Toggle PIP mode.
export default function pip() {
  const videoPlayer = document.getElementById('pip-only');
  const playerContainer = document.getElementById('pip-container');

  async function togglePictureInPicture() {
    // Early return if there's already a Picture-in-Picture window open.
    if (window.documentPictureInPicture.window) {
      playerContainer.append(videoPlayer);
      window.documentPictureInPicture.window.close();
      return;
    }

    // Open a Picture-in-Picture window.
    const pipWindow = await window.documentPictureInPicture.requestWindow({
      width: 300,
      height: 300,
    });

    // Handle the case of the pip window being closed using the browser X button.
    pipWindow.addEventListener('pagehide', () => {
      playerContainer.append(videoPlayer);
      const togglePipButton = document.querySelector('#pip-toggle');
      togglePipButton.style.display = 'block';
    });

    // Copy style sheets.
    [...document.styleSheets].forEach((styleSheet) => {
      try {
        const cssRules = [...styleSheet.cssRules]
          .map((rule) => rule.cssText)
          .join('');
        const style = document.createElement('style');
        style.textContent = cssRules;
        pipWindow.document.head.appendChild(style);
      } catch (e) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = styleSheet.type;
        link.media = styleSheet.media;
        link.href = styleSheet.href;
        pipWindow.document.head.appendChild(link);
      }
    });

    // Move the player to the Picture-in-Picture window.
    pipWindow.document.body.append(videoPlayer);
  }

  /* If PIP is supported */
  if ('documentPictureInPicture' in window) {
    const togglePipButton = document.createElement('button');
    togglePipButton.type = 'button';
    togglePipButton.id = 'pip-toggle';
    togglePipButton.textContent = 'Mini mode';
    togglePipButton.addEventListener('click', togglePictureInPicture, false);
    document.getElementById('controlbar').appendChild(togglePipButton);

    // PIP IS ACTIVE!
    // eslint-disable-next-line no-undef
    documentPictureInPicture.addEventListener('enter', () => {
      togglePipButton.style.display = 'none';
      console.log('Video player has entered the pip window');
      videoPlayer.removeAttribute('hidden');
      // to-do show mini contrast controls
    });
  }
}
