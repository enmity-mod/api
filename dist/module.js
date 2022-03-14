export function getModule(filter, exports = true) {
    return window.enmity.getModule(filter, exports);
}
export function getModules(filter, first = false) {
    return window.enmity.getModules(filter, first);
}
export function getModuleByProps(...props) {
    return window.enmity.getModuleByProps(props);
}
export function getModuleByIndex(id) {
    return window.enmity.getModuleByIndex(id);
}
