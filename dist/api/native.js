const { native } = window.enmity;
export function reload() {
    native.reload();
}
export const version = native.version;
export const build = native.build;
export const device = native.device;
export const os = native.version;
