/* eslint-disable no-undef */
import * as Utils from '../utils/utils.js';
import { clearAllTooltips } from '../utils/popover.js';

// Toggle PIP mode.
export default function initPictureInPicture() {
  const pipContent = document.getElementById('pip-only');
  const pipContainer = document.getElementById('pip-container');

  async function togglePictureInPicture() {
    // Early return if there's already a Picture-in-Picture window open.
    if (window.documentPictureInPicture.window) {
      pipContainer.append(pipContent);
      window.documentPictureInPicture.window.close();
      return;
    }

    // Open a Picture-in-Picture window.
    const pipWindow = await window.documentPictureInPicture.requestWindow({
      width: 290,
      height: 365,
    });

    // Handle the case of the pip window being closed using the browser X button.
    pipWindow.addEventListener('pagehide', () => {
      pipContainer.append(pipContent);
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
    pipWindow.document.body.append(pipContent);
  }

  /* If PIP is supported */
  if ('documentPictureInPicture' in window) {
    const pipButton = document.getElementById('pip-btn');
    pipButton.style.display = 'inline-flex';
    pipButton.addEventListener('click', togglePictureInPicture, false);

    // PIP IS ACTIVE!
    documentPictureInPicture.addEventListener('enter', () => {
      pipButton.style.display = 'none';
      pipContent.removeAttribute('hidden');
      pipButton.classList.remove('glow');

      // Set theme within PiP
      const picInPictureDoc = window.documentPictureInPicture?.window?.document;
      if (picInPictureDoc) {
        picInPictureDoc.documentElement.setAttribute(
          'data-theme',
          Utils.store.getItem('theme'),
        );
      }

      // Eyedroppers don't work in PiP mode on WINDOWS.
      setTimeout(() => {
        const isWindows = navigator.userAgent.includes('Windows');
        const pipDoc = window.documentPictureInPicture?.window?.document;
        if (isWindows && pipDoc) {
          ['bg-eyedropper', 'fg-eyedropper'].forEach((id) => {
            const dropper = pipDoc.getElementById(id);
            if (dropper) dropper.style.display = 'none';
          });
          const pickers = pipDoc.querySelectorAll('input[type="text"]');
          pickers.forEach((input) => {
            input.classList.add('eyedropper-not-supported');
          });
        }
      }, 0);

      // Clear any alerts.
      Utils.clearAlert();
      clearAllTooltips();
    });
  }
}
