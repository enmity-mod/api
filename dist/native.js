function reloadDiscord() {
    window.enmity.native.reloadDiscord();
}
function getVersion() {
    return window.enmity.native.Version;
}
function getBuild() {
    return window.enmity.native.Build;
}
function getDevice() {
    return window.enmity.native.device;
}
function getSystemVersion() {
    return window.enmity.native.systemVersion;
}
export { reloadDiscord, getVersion, getBuild, getDevice, getSystemVersion };
