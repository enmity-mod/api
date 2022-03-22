export function getSetting(key) {
    return window.enmity.settings.get(key);
}
export function setSetting(setting) {
    window.enmity.settings.set(setting);
}
