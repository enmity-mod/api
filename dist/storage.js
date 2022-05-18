export async function getItem(name) {
    return await window.enmity.storage.getitem(name);
}
export async function setItem(name, value) {
    return await window.enmity.storage.setitem(name, value);
}
export async function removeItem(name) {
    await window.enmity.storage.removeItem(name);
}
