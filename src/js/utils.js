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

export function convertShortHex(hex) {
  // Check if the hex code is 3 characters long and starts with a '#'
  if (hex.length === 4 && hex[0] === '#') {
    // Convert it to 6 characters by repeating each character
    return `#${hex[1].repeat(2)}${hex[2].repeat(2)}${hex[3].repeat(2)}`;
  }
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
};

export const getDefaultValues = () => {
  const params = new URLSearchParams(window.location.search);
  if (!store.getItem('foreground') || !store.getItem('background')) {
    store.setItem('foreground', '#ffffff');
    store.setItem('background', '#000000');
  }

  const fg = params.get('fg') || store.getItem('foreground');
  const bg = params.get('bg') || store.getItem('background');
  return { fg, bg };
};
