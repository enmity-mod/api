export function set(file, setting, value) {
    window.enmity.settings.set(file, setting, value);
}
export function get(file, setting, defaults) {
    return window.enmity.settings.get(file, setting, defaults);
}
export function getBoolean(file, setting, defaults) {
    return window.enmity.settings.getBoolean(file, setting, defaults);
}
export function toggle(file, setting, defaults) {
    window.enmity.settings.toggle(file, setting, defaults);
}
export function connectComponent(component, file) {
    return window.enmity.settings.connectComponent(component, file);
}
export function makeStore(file) {
    return window.enmity.settings.makeStore(file);
}
export function subscribe(file, callback) {
    window.enmity.settings.subscribe(file, callback);
}
export function unsubscribe(file, callback) {
    window.enmity.settings.unsubscribe(file, callback);
}
export function connectStores(component, file) {
    return window.enmity.settings.connectStores(component, file);
}
