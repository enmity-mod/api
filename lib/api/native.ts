const { Native } = window.enmity.modules.common;

/**
 * Reload Discord.
 */
export const reload: () => void = Native.BundleUpdaterManager.reload;

/**
 * Discord's version.
 */
export const version: string = Native.InfoDictionaryManager.Version;

/**
 * Discord's build number.
 */
export const build: string = Native.InfoDictionaryManager.Build;

/**
 * User's device identifier.
 */
export const device: string = Native.DCDDeviceManager.device;

/**
 * User's device version.
 */
export const os: string = Native.DCDDeviceManager.systemVersion;
