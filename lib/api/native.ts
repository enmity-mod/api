/**
 * Reload Discord.
 */
export function reloadDiscord(): void {
  window.enmity.native.reloadDiscord();
}

/**
 * Get Discord's version.
 */
export function getVersion(): string {
  return window.enmity.native.Version;
}

/**
 * Get Discord's build number.
 */
export function getBuild(): string {
  return window.enmity.native.Build;
}

/**
 * Get user's device identifier.
 */
export function getDevice(): string {
  return window.enmity.native.device;
}

/**
 * Get user's device version.
 */
export function getSystemVersion(): string {
  return window.enmity.native.systemVersion;
}
