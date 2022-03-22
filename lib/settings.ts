/**
 * Get a setting via a key.
 * @param {string} key Setting's key
 * @return {string} Setting's value
 */
export function getSetting(key: string): string {
  return window.enmity.settings.get(key);
}

/**
 * Set a setting
 * @param {Record<string, string>} setting Setting to set
 * @return {void}
 */
export function setSetting(setting: Record<string, string>): void {
  window.enmity.settings.set(setting);
}
