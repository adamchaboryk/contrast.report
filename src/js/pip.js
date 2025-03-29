/* eslint-disable no-undef */
import { store } from './utils.js';

// Toggle PIP mode.
export default function initPip() {
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
      const togglePipButton = document.querySelector('#pip-btn');
      togglePipButton.style.display = 'inline-flex';
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
    const pipButton = document.getElementById('pip-btn');
    pipButton.style.display = 'inline-flex';
    pipButton.addEventListener('click', togglePictureInPicture, false);

    // PIP IS ACTIVE!
    documentPictureInPicture.addEventListener('enter', () => {
      pipButton.style.display = 'none';
      console.log('Video player has entered the pip window');
      videoPlayer.removeAttribute('hidden');

      // Set theme within PiP
      const picInPictureDoc = window.documentPictureInPicture?.window?.document;
      if (picInPictureDoc) {
        picInPictureDoc.documentElement.setAttribute(
          'data-theme',
          store.getItem('theme'),
        );
      }
    });
  }
}
