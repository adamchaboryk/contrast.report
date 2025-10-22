import * as Utils from '../utils/utils.js';
import Lang from '../utils/lang.js';
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
      aria-label="${Lang.sprintf('SWATCH', foreground, background)}"
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
    save.innerHTML = `<span class="lg-only">${Lang._('SAVE')}</span> ${Icon.save}`;
  } else {
    swatches.push([foreground, background]); // Add swatch
    save.innerHTML = `<span class="lg-only">${Lang._('UNSAVE')}</span> ${Icon.trash}`;

    if (window.documentPictureInPicture?.window?.document) {
      Utils.createAlert(Lang._('SWATCH_SAVED_WINDOW'));
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
    ? `<span class="lg-only">${Lang._('UNSAVE')}</span> ${Icon.trash}`
    : `<span class="lg-only">${Lang._('SAVE')}</span> ${Icon.save}`;
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

  // Load swatches on page.
  const waitForElement = () => {
    if (root.getElementById('save')) {
      updateSaveTextButton();
      generateSwatchButtons();
    } else {
      requestAnimationFrame(waitForElement);
    }
  };
  requestAnimationFrame(waitForElement);
}
