const { native } = window.enmity;

/**
 * Reload Discord.
 */
export function reload(): void {
   native.reload();
}

/**
 * Discord's version.
 */
export const version: string = native.version;

/**
 * Discord's build number.
 */
export const build: string = native.build;

/**
 * User's device identifier.
 */
export const device: string = native.device;

/**
 * User's OS version.
 */
export const os: string = native.version;
