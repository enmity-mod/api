/**
 * Get an item from storage
 */
async function getItem(name: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    window.enmity.storage.getItem(name).then((data: string | null) => {
      resolve(data);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Set an item in storage
 */
 async function setItem(name: string, value: string): Promise<string> {
  return new Promise((resolve, reject) => {
    window.enmity.storage.setItem(name, value).then((data: string | null) => {
      resolve(data);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Remove an item from storage
 */
async function removeItem(name: string): Promise<void> {
  return new Promise((resolve, reject) => {
    window.enmity.storage.removeItem(name).then(() => {
      resolve();
    }).catch((err: any) => {
      reject(err);
    });
  });
}

export {
  getItem,
  setItem,
  removeItem
}