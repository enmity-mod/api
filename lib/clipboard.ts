/**
 * Set text to the clipboard.
 * @param {string} text Text copied to the clipboard
 * @return {void}
 */
export function setString(text: string): void {
  window.enmity.clipboard.setString(text);
}

/**
 * Get text from the clipboard.
 * @return {Promise<string>} Text in the clipboard
 */
export async function getString(): Promise<string> {
  return window.enmity.clipboard.getString();
}
