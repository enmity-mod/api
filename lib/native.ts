/**
 * Reload Discord.
 */
export function reloadDiscord(): void {
  window.enmity.native.reloadDiscord();
}

/**
 * Get Discord's version
 */
export function getVersion(): void {
  return window.enmity.native.Version;
}

/**
 * Get Discord's build number.
 */
export function getBuild(): void {
  return window.enmity.native.Build;
}

/**
 * Get user's device identifier.
 */
export function getDevice(): void {
  return window.enmity.native.device;
}

/**
 * Get user's device version.
 */
export function getSystemVersion(): void {
  return window.enmity.native.systemVersion;
}
