export function getModule(
  filter: (module: ModuleExports) => boolean,
  exports?: true
): ModuleExports;

export function getModule(
  filter: (module: ModuleExports) => boolean,
  exports?: false
): Module;

/**
 * Find a Discord module.
 * Will return the first module that matches the filter.
 * @example getModule(m => m.key)
 *
 * @param {(ModuleExports) => boolean} filter Search filter
 * @param {boolean} exports Return the modules with or without exports
 * @returns {Module | ExportedModule}
 */
export function getModule(
  filter: (module: ModuleExports) => boolean,
  exports = true,
): Module | ModuleExports {
  return window.enmity.getModule(filter, exports);
}

/**
 * Get the IDs of the modules that matches the filter.
 * @example getModules(m => m.key)
 *
 * @param {(ModuleExports) => boolean} filter Search filter
 * @param {boolean} first Return the first matched module
 * @returns {number[]} IDs of the matched modules
 */
export function getModules(filter: (module: ModuleExports) => boolean, first = false): number[] {
  return window.enmity.getModules(filter, first);
}

/**
 * Get a module via props.
 * @param {string[]} props Properties to search for
 * @returns {ModuleExports}
 */
export function getModuleByProps(...props: string[]): ModuleExports {
  return window.enmity.getModuleByProps(props);
}

/**
 * Get a module via it's id
 * @param {string} id ID of the module
 * @returns {Module}
 */
export function getModuleByIndex(id: string): Module {
  return window.enmity.getModuleByIndex(id);
}

declare global {
  interface Window {
    enmity: Record<string, any>;
  }
}

/**
 * Represents a module.
 */
export interface Module {
  id: string;
  exports: ModuleExports;
}

/**
 * Represents a module's exports.
 * Modules are Javascript objects.
 */
export interface ModuleExports {
  default?: { [key: string]: any };
  [key: string]: any;
}
