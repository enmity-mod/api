/**
 * This function will reload Discord entirely, including reloading plugins
 */
function reloadDiscord() {
  window.enmity.native.reloadDiscord();
}

/**
 * Get the Discord's version
 */
function getVersion() {
  return window.enmity.native.Version;
}

/**
 * Get the Discord's build number
 */
function getBuild() {
  return window.enmity.native.Build;
}

/**
 * Get the user's device
 */
function getDevice() {
  return window.enmity.native.device;
}

/**
 * Get the user's device version
 */
function getSystemVersion() {
  return window.enmity.native.systemVersion;
}

export {
  reloadDiscord,

  getVersion,
  getBuild,
  getDevice,
  getSystemVersion
}