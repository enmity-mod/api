/**
 * Type alias for Mdl.
 *
 * Can either be a Function or an Object.
 */
export type Mdl = Function | object;

/**
 * Callback for a patch.
 *
 * Self is a reference to this in the context of the patched function.
 *
 * Args is the list of arguments sent to the patched function.
 *
 * Res is a reference to the original function.
 */
export type PatchCallback = (self: any, args: any[], res: any) => void;

/**
 * Interface that includes unpatchAll.
 */
export interface Patchable {
  /**
   * Unpatch all the patches.
   */
  unpatchAll: () => void;
}

/**
 * Represents a patcher.
 *
 * A patcher is used to patch function calls and such.
 */
export interface Patcher {
  /**
   * Name of the caller
   */
  caller: string;

  /**
   * Type of the patcher
   */
  type: string;

  /**
   * Internal ID of the patcher
   */
  id: number;

  /**
   * Callback of the patcher.
   */
  callback: PatchCallback;

  /**
   * Remove the applied patch.
   */
  unpatch: () => void;
}

/**
 * Represents a patch.
 */
export interface Patch extends Patchable {
  /**
   * Get the list of patcher used by this patch.
   * @param id Name of the caller
   * @returns {Patcher[]} Lists of patcher
   */
  getPatchesByCaller: (id: string) => Patcher[];

  /**
   * Apply a before patch.
   *
   * Patch will be executed before the original function is called.
   */
  before: (mdl: Mdl, func: string, callback: PatchCallback) => Patchable;

  /**
   * Apply an instead patch.
   *
   * Patch will replace the original function call.
   */
  instead: (mdl: Mdl, func: string, callback: PatchCallback) => Patchable;

  /**
   * Apply an after patch.
   *
   * Patch will be executed after the original function has been called.
   */
  after: (mdl: Mdl, func: string, callback: PatchCallback) => Patchable;
}

/**
 * Create a patch.
 * @see {@link Patch}
 */
export function create(name: string): Patch {
  return window.enmity.patcher.create(name);
}

/**
 * Creates a before patch.
 *
 * Patch will be executed before the original function is called.
 */
export function before(
  caller: string,
  mdl: Mdl,
  func: string,
  callback: PatchCallback,
): Patchable {
  const unpatch = window.enmity.patcher.before(caller, mdl, func, callback);
  return {
    unpatchAll: unpatch,
  };
}

/**
 * Creates an instead patch.
 *
 * Patch will replace the original function call.
 */
export function instead(
  caller: string,
  mdl: Mdl,
  func: string,
  callback: PatchCallback,
): Patchable {
  const unpatch = window.enmity.patcher.instead(caller, mdl, func, callback);
  return {
    unpatchAll: unpatch,
  };
}

/**
 * Creates an after patch.
 *
 * Patch will be executed after the original function has been called.
 */
export function after(
  caller: string,
  mdl: Mdl,
  func: string,
  callback: PatchCallback,
): Patchable {
  const unpatch = window.enmity.patcher.after(caller, mdl, func, callback);
  return {
    unpatchAll: unpatch,
  };
}
