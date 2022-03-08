function getModule(filter, exports = true) {
    const module = window.enmity.getModule(filter, exports);
    return module;
}
function getModules(filter, first = false) {
    return window.enmity.getModules(filter, first);
}
function getModuleByProps(...props) {
    return window.enmity.getModuleByProps(props);
}
function getModuleByIndex(id) {
    return window.enmity.getModuleByIndex(id);
}
export { getModule, getModules, getModuleByProps, getModuleByIndex };
