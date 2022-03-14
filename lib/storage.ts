/**
 * Get an item from the storage
 * @param {string} name Key of the item
 * @returns {string | null}
 */
export async function getItem(name: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    window.enmity.storage.getItem(name).then((data: string | null) => {
      resolve(data);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Set an item in the storage
 * @param {string} name Key of the item
 * @param {string} value Value of the item
 * @returns {string | null}
 */
export async function setItem(name: string, value: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    window.enmity.storage.setItem(name, value).then((data: string | null) => {
      resolve(data);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Remove an item from the storage
 * @param {string} name Key of the item
 * @returns {void}
 */
export async function removeItem(name: string): Promise<void> {
  return new Promise((resolve, reject) => {
    window.enmity.storage.removeItem(name).then(() => {
      resolve();
    }).catch((err: any) => {
      reject(err);
    });
  });
}
