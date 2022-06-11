import { Module } from './common';

/**
 * Callback for a patch.
 * @param {any} self A reference to `this` in the context of the patched function.
 * @param {any[]} args The list of arguments sent to the patched function.
 * @param {any} res A reference to the original function for before and instead patches, and the result of the original function for after patches.
 * @returns {void|any} The new arguments or return value of the function. To keep the original arguments or return value (probably modified in place in the function body), don't return anything.
 */
export type PatchCallback = (self: any, args: any[], res: any) => void | any;

/**
 * Represents a patch.
 *
 * A patch is used to modify function calls and such.
 */
export interface Patch {
   /**
    * Name of the caller.
    */
   caller: string;

   /**
    * Type of the patch (before/instead/after).
    */
   type: string;

   /**
    * Internal ID of the patch.
    */
   id: number;

   /**
    * Callback of the patch.
    */
   callback: PatchCallback;

   /**
    * Remove the applied patch.
    */
   unpatch: () => void;
}

/**
 * Represents a patcher.
 */
export interface Patcher {
   /**
    * Get the list of patches used by this patcher.
    * @param id Name of the caller.
    * @returns {Patch[]} List of patches.
    */
   getPatchesByCaller: (id: string) => Patch[];

   /**
    * Apply a before patch.
    *
    * Patch will be executed before the original function is called.
    */
   before: (mdl: Module, func: string, callback: PatchCallback) => () => void;

   /**
    * Apply an instead patch.
    *
    * Patch will replace the original function call.
    */
   instead: (mdl: Module, func: string, callback: PatchCallback) => () => void;

   /**
    * Apply an after patch.
    *
    * Patch will be executed after the original function has been called.
    */
   after: (mdl: Module, func: string, callback: PatchCallback) => () => void;

   /**
    * Unpatch all patches from this patcher.
    */
   unpatchAll: () => void;
}

/**
 * Create a patcher.
 * @see {@link Patcher}
 */
export function create(name: string): Patcher {
   return window.enmity.patcher.create(name);
}

/**
 * Creates a before patch.
 *
 * Patch will be executed before the original function is called.
 */
export function before(
   caller: string,
   mdl: Module,
   func: string,
   callback: PatchCallback,
): () => void {
   return window.enmity.patcher.before(caller, mdl, func, callback);
}

/**
 * Creates an instead patch.
 *
 * Patch will replace the original function call.
 */
export function instead(
   caller: string,
   mdl: Module,
   func: string,
   callback: PatchCallback,
): () => void {
   return window.enmity.patcher.instead(caller, mdl, func, callback);
}

/**
 * Creates an after patch.
 *
 * Patch will be executed after the original function has been called.
 */
export function after(
   caller: string,
   mdl: Module,
   func: string,
   callback: PatchCallback,
): () => void {
   return window.enmity.patcher.after(caller, mdl, func, callback);
}
