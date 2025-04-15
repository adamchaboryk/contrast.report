import { computePosition, autoUpdate } from '@floating-ui/dom';
import * as Utils from './utils.js';

/**
 * Creates a popover.
 * @param {HTMLElement} trigger The element that triggers the popover.
 * @param {HTMLElement} popoverContainer The popover element.
 * @param {Object} [options={}] Optional settings for the popover.
 *
 * @returns {Object} Methods to control the popover: `show`, `hide`, and `toggle`.
 */
export function createPopover(trigger, popoverContainer, options = {}) {
  const defaultOptions = {
    placement: 'bottom-start',
    // middleware: [offset(10), flip(), shift({ padding: 0 })],
  };

  let hide;
  let cleanup = null;
  let clickOutsideHandler = null;
  let escapeKeyHandler = null;

  trigger.setAttribute('aria-haspopup', 'true');
  trigger.setAttribute('aria-expanded', 'false');

  const popoverId =
    popoverContainer.id ||
    `popover-${Math.random().toString(36).substring(2, 9)}`;

  if (!popoverContainer.id) {
    popoverContainer.setAttribute('id', popoverId);
  }

  trigger.setAttribute('aria-controls', popoverId);
  popoverContainer.setAttribute('role', 'dialog');
  popoverContainer.setAttribute('hidden', 'true');
  popoverContainer.setAttribute('aria-hidden', 'true');

  const removeClickOutside = (handler) => {
    if (handler) {
      document.removeEventListener('click', handler);
    }
  };

  const removeEscapeHandler = (handler) => {
    if (handler) {
      document.removeEventListener('keydown', handler);
    }
  };

  const setupClickOutside = () => {
    const newHandler = (event) => {
      if (
        popoverContainer.getAttribute('hidden') === null &&
        !popoverContainer.contains(event.target) &&
        !trigger.contains(event.target)
      ) {
        hide();
      }
    };
    setTimeout(() => {
      document.addEventListener('click', newHandler);
    }, 0);
    return newHandler;
  };

  const setupEscapeKey = () => {
    const handler = (event) => {
      if (
        event.key === 'Escape' &&
        popoverContainer.getAttribute('hidden') === null
      ) {
        hide();
      }
    };
    document.addEventListener('keydown', handler);
    return handler;
  };

  const show = () => {
    popoverContainer.removeAttribute('hidden');
    trigger.setAttribute('aria-expanded', 'true');
    popoverContainer.setAttribute('aria-hidden', 'false');
    const newCleanup = autoUpdate(trigger, popoverContainer, () => {
      computePosition(trigger, popoverContainer, {
        ...defaultOptions,
        ...options,
      }).then(({ x, y }) => {
        popoverContainer.style.setProperty('left', `${x}px`);
        popoverContainer.style.setProperty('top', `${y}px`);
      });
    });
    clickOutsideHandler = setupClickOutside();
    escapeKeyHandler = setupEscapeKey();
    cleanup = newCleanup;
  };

  hide = () => {
    popoverContainer.setAttribute('hidden', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    popoverContainer.setAttribute('aria-hidden', 'true');
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
    removeClickOutside(clickOutsideHandler);
    removeEscapeHandler(escapeKeyHandler);
    clickOutsideHandler = null;
    escapeKeyHandler = null;
  };

  const toggle = () => {
    if (popoverContainer.getAttribute('hidden') !== null) {
      show();
    } else {
      hide();
    }
  };
  return { show, hide, toggle };
}

export function clearAllTooltips() {
  Utils.getActiveRoot().forEach((root) => {
    root.querySelectorAll('.tooltip').forEach((tooltip) => {
      tooltip.remove();
    });
  });
}
