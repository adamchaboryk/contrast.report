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
