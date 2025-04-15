import chroma from 'chroma-js';
import * as Icon from './icons.js';

export function normalizeColorInput(color) {
  // Strip excessive whitespace.
  let normalizedColor = color.replace(/\s+/g, ' ');

  // Accidental double #.
  normalizedColor = normalizedColor.replace(/##/g, '#');

  // Splice trailing semicolon.
  if (normalizedColor.endsWith(';')) {
    normalizedColor = normalizedColor.slice(0, -1);
  }

  // If 3 letter alpha numeric without #, append # to beginning of string.
  const maybeHex = /^[a-fA-F0-9]{3}$/.test(normalizedColor);
  const reservedWords = new Set([
    'rgb',
    'hsl',
    'hwb',
    'lab',
    'lch',
    'oklch',
    'oklab',
    'cmyk',
  ]);
  if (maybeHex && !reservedWords.has(normalizedColor.toLowerCase())) {
    normalizedColor = `#${normalizedColor}`;
  }
  return normalizedColor;
}

export function transparentHexToSolid(hex) {
  if (hex.length === 9) return hex.slice(0, 7);
  return hex;
}

export function getRoundedHSLA(color) {
  const [h, s, l, a] = chroma(color).hsl();
  const roundedH = Math.round(h);
  const roundedS = Math.round(s * 100);
  const roundedL = Math.round(l * 100);
  return `hsla(${roundedH}, ${roundedS}%, ${roundedL}%, ${a})`;
}

export function RGBAToHexA(color) {
  const [r, g, b, a] = color;
  const red = r.toString(16);
  const green = g.toString(16);
  const blue = b.toString(16);
  const alpha = Math.round(a * 255).toString(16);
  const rHex = red.length === 1 ? `0${red}` : red;
  const gHex = green.length === 1 ? `0${green}` : green;
  const bHex = blue.length === 1 ? `0${blue}` : blue;
  const aHex = alpha.length === 1 ? `0${alpha}` : alpha;
  return `#${rHex}${gHex}${bHex}${aHex}`;
}

export function toRGBAstring(color) {
  const [r, g, b, a] = color;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function toRGBstring(color) {
  const [r, g, b] = color;
  return `rgba(${r}, ${g}, ${b})`;
}

export const store = {
  getItem(key) {
    try {
      if (localStorage.getItem(key) === null) {
        return sessionStorage.getItem(key);
      }
      return localStorage.getItem(key);
    } catch (error) {
      return false;
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      sessionStorage.setItem(key, value);
    }
    return true;
  },
  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      sessionStorage.removeItem(key);
    }
    return true;
  },
  setSwatch(foreground, background) {
    try {
      const swatches = JSON.parse(localStorage.getItem('swatches')) || [];
      if (
        !swatches.some(([fg, bg]) => fg === foreground && bg === background)
      ) {
        swatches.push([foreground, background]);
        localStorage.setItem('swatches', JSON.stringify(swatches));
      }
    } catch {
      const swatches = JSON.parse(sessionStorage.getItem('swatches')) || [];
      if (
        !swatches.some(([fg, bg]) => fg === foreground && bg === background)
      ) {
        swatches.push([foreground, background]);
        sessionStorage.setItem('swatches', JSON.stringify(swatches));
      }
    }
  },
};

export const getDefaultValues = () => {
  const params = new URLSearchParams(window.location.search);

  // If no local storage entries, use the following default.
  if (!store.getItem('foreground')) store.setItem('foreground', '#0061d4');
  if (!store.getItem('background')) store.setItem('background', '#f4f8ff');

  // If arrive on page via link params.
  if (params.get('fg')) store.setItem('foreground', params.get('fg'));
  if (params.get('bg')) store.setItem('background', params.get('bg'));

  // Default WCAG level.
  if (!store.getItem('level')) store.setItem('level', 'aa');

  // Final default values.
  const fg = params.get('fg') || store.getItem('foreground');
  const bg = params.get('bg') || store.getItem('background');
  return { fg, bg };
};

/* This is a mini utility function that determines which window we are in. */
export const getActiveRoot = () => {
  if (!('documentPictureInPicture' in window)) return [document];
  return [document, window.documentPictureInPicture?.window?.document].filter(
    Boolean,
  );
};

/**
 * Clear alert.
 */
export const clearAlert = () => {
  getActiveRoot().forEach((root) => {
    if (root) {
      const alert = root.querySelector('#alert');
      if (alert) alert.innerHTML = '';
    }
  });
};

/**
 * Create an alert message.
 * @param {String} message Alert message.
 */
export const createAlert = (message) => {
  getActiveRoot().forEach((root) => {
    if (root) {
      const alert = root.getElementById('alert');
      if (alert) alert.innerHTML = ''; // Clear first.
      setTimeout(() => {
        const p = root.createElement('p');
        p.classList.add('alert');
        p.textContent = message;

        const closeButton = root.createElement('button');
        closeButton.classList.add('close-btn');
        closeButton.innerHTML = Icon.close;
        closeButton.ariaLabel = 'Close alert';
        closeButton.onclick = () => clearAlert();

        p.appendChild(closeButton);
        if (alert) alert.appendChild(p);

        alert.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      }, 10);
    }
  });
};
