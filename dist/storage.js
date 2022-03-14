export async function getItem(name) {
    return new Promise((resolve, reject) => {
        window.enmity.storage.getItem(name).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}
export async function setItem(name, value) {
    return new Promise((resolve, reject) => {
        window.enmity.storage.setItem(name, value).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}
export async function removeItem(name) {
    return new Promise((resolve, reject) => {
        window.enmity.storage.removeItem(name).then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}
