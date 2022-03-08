function registerPlugin(plugin) {
    window.enmity.plugins.registerPlugin(plugin);
}
function getPlugin(name) {
    return window.enmity.plugins.getPlugin(name);
}
function getPlugins() {
    return window.enmity.plugins.getPlugins();
}
export { registerPlugin, getPlugin, getPlugins };
