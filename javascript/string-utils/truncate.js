/**
 * Truncate a string to a specified length
 * @param {string} str - The string to truncate
 * @param {number} length - Maximum length
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated string
 */
export function truncate(str, length, suffix = '...') {
  if (typeof str !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (str.length <= length) {
    return str;
  }

  return str.slice(0, length - suffix.length) + suffix;
}

// Example usage:
// truncate('Hello World', 8) => 'Hello...'