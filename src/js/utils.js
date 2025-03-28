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
