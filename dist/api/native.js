const { Native } = window.enmity.modules.common;
export const reload = Native.BundleUpdaterManager.reload;
export const version = Native.InfoDictionaryManager.Version;
export const build = Native.InfoDictionaryManager.Build;
export const device = Native.DCDDeviceManager.device;
export const os = Native.DCDDeviceManager.systemVersion;
