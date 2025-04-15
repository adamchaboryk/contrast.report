import * as Utils from '../utils/utils.js';
import * as Icon from '../utils/icons.js';

function generateSwatchButtons() {
  const container = document.getElementById('swatch-container');
  container.innerHTML = ''; // Clear existing.
  const swatches = JSON.parse(Utils.store.getItem('swatches')) || [];
  const baseUrl = window.location.origin + window.location.pathname;
  swatches.forEach(([foreground, background]) => {
    const permalink = `${baseUrl}?fg=${encodeURIComponent(foreground)}&bg=${encodeURIComponent(background)}`;
    const li = document.createElement('li');
    li.innerHTML = `<a
      href="${permalink}"
      aria-label="Swatch: ${foreground} on ${background}"
      style="color: ${foreground}; background: ${background}; border: 3px solid ${foreground}"
      class="swatch">${Icon.drop}</a>`;
    container.appendChild(li);

    // Show container if saved swatches exist.
    const section = document.getElementById('saved-colors');
    if (Utils.store.getItem('swatches')) section.removeAttribute('hidden');
  });
}

function toggleSaveButton(foreground, background) {
  const root = window.documentPictureInPicture?.window?.document ?? document;
  if (!root) return;

  const save = root.getElementById('save');
  if (!save) return;

  const swatches = JSON.parse(Utils.store.getItem('swatches')) || [];
  const index = swatches.findIndex(
    ([fg, bg]) => fg === foreground && bg === background,
  );

  if (index > -1) {
    swatches.splice(index, 1); // Remove swatch
    save.innerHTML = `<span class="lg-only">Save</span> ${Icon.save}`;
  } else {
    swatches.push([foreground, background]); // Add swatch
    save.textContent = 'Unsave';

    if (window.documentPictureInPicture?.window?.document) {
      Utils.createAlert('Swatch saved to main window.');
    } else {
      const element = document.getElementById('saved-colors-heading');
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  Utils.store.setItem('swatches', JSON.stringify(swatches));
  generateSwatchButtons();

  // Show container if saved swatches exist.
  const section = root.getElementById('saved-colors');
  if (section) {
    if (swatches.length === 0) {
      section.setAttribute('hidden', '');
    } else {
      section.removeAttribute('hidden');
    }
  }
}

export function updateSaveTextButton() {
  const params = new URLSearchParams(window.location.search);
  const foreground = params.get('fg') || Utils.store.getItem('foreground');
  const background = params.get('bg') || Utils.store.getItem('background');
  const swatches = JSON.parse(Utils.store.getItem('swatches')) || [];

  const root = window.documentPictureInPicture?.window?.document ?? document;
  const save = root.getElementById('save');
  save.innerHTML = swatches.some(
    ([fg, bg]) => fg === foreground && bg === background,
  )
    ? 'Unsave'
    : `<span class="lg-only">Save</span> ${Icon.save}`;
}

export default function initSavedColors() {
  // Initialize click event for the "Save" button.
  const root = window.documentPictureInPicture?.window?.document ?? document;
  const save = root.getElementById('save');
  save.addEventListener('click', () => {
    const params = new URLSearchParams(window.location.search);
    const foreground = params.get('fg') || Utils.store.getItem('foreground');
    const background = params.get('bg') || Utils.store.getItem('background');
    generateSwatchButtons();
    toggleSaveButton(foreground, background);
  });

  // Update button text on page load.
  document.addEventListener('DOMContentLoaded', () => {
    updateSaveTextButton();
    generateSwatchButtons();
  });
}
