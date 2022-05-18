/**
 * Get an item from the storage
 * @param {string} name Key of the item
 * @returns {string | null}
 */
export async function getItem(name: string): Promise<string | null> {
  return await window.enmity.storage.getitem(name);
}

/**
 * Set an item in the storage
 * @param {string} name Key of the item
 * @param {string} value Value of the item
 * @returns {string | null}
 */
export async function setItem(name: string, value: string): Promise<string | null> {
  return await window.enmity.storage.setItem(name, value);
}

/**
 * Remove an item from the storage
 * @param {string} name Key of the item
 * @returns {void}
 */
export async function removeItem(name: string): Promise<void> {
  await window.enmity.storage.removeItem(name);
}
