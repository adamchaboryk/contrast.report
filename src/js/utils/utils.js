export function normalizeColorInput(color) {
  // Strip excessive whitespace.
  let normalizedColor = color.replace(/\s+/g, ' ');

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

/**
 * A utility object for handling storage operations using localStorage and sessionStorage.
 * @param  {String} key
 * @param  {string} value
 * @return {String} Return key.
 */
export const store = {
  getItem(key) {
    try {
      if (localStorage.getItem(key) === null) {
        return sessionStorage.getItem(key);
      }
      return localStorage.getItem(key);
    } catch (error) {
      // Cookies totally disabled.
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
  // If no local storage entries, use the following default.
  if (!store.getItem('foreground') || !store.getItem('background')) {
    store.setItem('foreground', '#0061d4');
    store.setItem('background', '#f4f8ff');
  }

  // If you landed on the page via URL params, update local storage.
  const params = new URLSearchParams(window.location.search);
  if (params.length) {
    store.setItem('foreground', params.get('fg'));
    store.setItem('background', params.get('bg'));
  }

  // Default WCAG level.
  if (!store.getItem('level')) store.setItem('level', 'aa');

  // Default URL params.
  const fg = params.get('fg') || store.getItem('foreground');
  const bg = params.get('bg') || store.getItem('background');
  return { fg, bg };
};
