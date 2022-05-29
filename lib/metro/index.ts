import { Module } from '../common';

/**
 * Options interface that includes `all`, `traverse`, and `defaultExport`.
 */
export interface BaseOptions {
   /**
    * Whether to return all modules that satisfy a filter.
    *
    * Defaults to false.
    */
   all?: boolean;

   /**
    * Whether to search within modules rather than just at the top level of their exports.
    *
    * Defaults to true.
    */
   traverse?: boolean;

   /**
    * Whether to return the default export of a module if available, rather than the entire module.
    *
    * Defaults to true.
    */
   defaultExport?: boolean;
}

/**
 * Options interface that includes `bulk`.
 */
export interface ConditionalBulk extends BaseOptions {
   /**
    * Whether to mark a
    */
   bulk?: true;
}

/**
 * Options interface that includes `default`.
 */
export interface DisplayNameOptions {
   /**
    * Whether to return the default export of a module if available, rather than the entire module.
    *
    * Defaults to true.
    * @see {@link BaseOptions.defaultExport}
    */
   default?: boolean;
}

/**
 * Options interface that includes `caseSensitive`.
 */
export interface KeywordOptions extends BaseOptions {
   /**
    * Whether the keyword search should be case-sensitive.
    *
    * Defaults to false.
    */
   caseSensitive?: boolean;
}

/**
 * Function that determines whether a module satisfies a condition.
 * @param {?Module} module The module.
 * @returns {boolean} Whether the module satisfies the condition.
 */
export type SearchFilter = (module?: Module) => boolean;

/**
 * Functions to generate {@link SearchFilter filters} that can be used as arguments for {@link getModule}, {@link getModules}, or {@link bulk} to retrieve modules.
 */
export const filters = {
   /**
    * Generate a {@link SearchFilter} based on a module's properties.
    * @param {string[]} mdls Properties that must be present for a module to satisfy the filter.
    * @returns {SearchFilter}
    */
   byProps: (...mdls: string[]): SearchFilter => window.enmity.modules.filters.byProps(...mdls),

   /**
    * Generate a {@link SearchFilter} based on a module's name.
    * @param {string} name The module's name.
    * @param {string?} defaultExport Whether to return the inner default property if found in an esModule.
    * @returns {SearchFilter}
    */
   byName: (name: string, defaultExport?: boolean): SearchFilter => window.enmity.modules.filters.byName(name, defaultExport),

   /**
    * Generate a {@link SearchFilter} based on a module's type name.
    * @param {string} name The module's type name.
    * @param {string?} defaultExport Whether to return the inner default property if found in an esModule.
    * @returns {SearchFilter}
    */
   byTypeName: (name: string, defaultExport?: boolean): SearchFilter => window.enmity.modules.filters.byTypeName(name, defaultExport),

   /**
    * Generate a {@link SearchFilter} based on a module's display name.
    * @param {string} name The module's display name.
    * @param {string?} defaultExport Whether to return the inner default property if found in an esModule.
    * @returns {SearchFilter}
    */
   byDisplayName: (name: string, defaultExport?: boolean): SearchFilter => window.enmity.modules.filters.byDisplayName(name, defaultExport),
};

/**
 * Get a module that satisfies a filter.
 *
 * When looping through the full array of available modules, the first module that satisfies the filter will be returned.
 * @param {SearchFilter} filter The filter to check the module.
 * @param {?BaseOptions} options Options to modify the module-searching behavior.
 * @returns {Module|Module[]|undefined} A module that satisfies the filter, or undefined if no module was found. Will return an array of modules if `all` in `options` is set to true.
 */
export function getModule(filter: SearchFilter, options?: BaseOptions): Module | Module[] | undefined {
   return window.enmity.modules.getModule(filter, options);
}

/**
 * Get all modules that satisfy a filter.
 * @param {SearchFilter} filter The filter to check.
 * @returns {Module[]} The modules that satisfy the filter.
 */
export function getModules(filter: SearchFilter): Module[] {
   return window.enmity.modules.getModules(filter);
}

/**
 * Get multiple modules using an array of {@link SearchFilter filters}.
 *
 * If you need to retrieve multiple modules at the same time, use this function instead of making multiple calls to other module-fetching functions. This function is more efficient because it only loops over the module cache once.
 * @param {SearchFilter[]} filters The filters to use.
 * @returns {(Module|undefined)[]} The modules that satisfy the filters, in the order of the filters.
 */
export function bulk(...filters: SearchFilter[]): (Module | undefined)[] {
   return window.enmity.modules.bulk(...filters);
}

/**
 * Get a module by its properties.
 * @param {string[]|[...props: string[]|(string[])[], options: ConditionalBulk]} options The properties that a module must have, or the properties and an object of options. If using the `bulk` option, then for each module's properties, use either a single string or an array of strings.
 * @returns {(Module|undefined)|(Module|undefined)[]} A module that has the given properties, or undefined if no module was found. Will return an array of modules if `bulk` or `all` in the options are set to true.
 */
export function getByProps(...options: string[] | [
   ...props: string[] | (string[])[],
   options: ConditionalBulk
]): (Module | undefined) | (Module | undefined)[] {
   return window.enmity.modules.getByProps(...options);
}

/**
 * Get a module by the `name` property of either the module or its default export.
 * @param {[displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]} options
 * @returns {(Module|undefined)|(Module|undefined)[]} A module that has the given display name, or undefined if no module was found.
 */
export function getByDisplayName(...options: [
   displayName: string,
   options?: DisplayNameOptions & ConditionalBulk
] | string[]): (Module | undefined) | (Module | undefined)[] {
   return window.enmity.modules.getByDisplayName(...options);
}

/**
 * Get a module by the `name` property of either the module or its default export's `type` property.
 *
 * Useful for getting components.
 * @param {[typeName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]} options
 * @returns {(Module|undefined)|(Module|undefined)[]} A module that has the given type name, or undefined if no module was found.
 */
export function getByTypeName(...options: [
   typeName: string,
   options?: DisplayNameOptions & ConditionalBulk
] | string[]): (Module | undefined) | (Module | undefined)[] {
   return window.enmity.modules.getByTypeName(...options);
}

/**
 * Get a module by the `name` property of either the module or its default export.
 * @param {[displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]} options
 * @returns {(Module|undefined)|(Module|undefined)[]} A module that has the given name, or undefined if no module was found.
 */
export function getByName(...options: [
   displayName: string,
   options?: DisplayNameOptions & ConditionalBulk
] | string[]): (Module | undefined) | (Module | undefined)[] {
   return window.enmity.modules.getByName(...options);
}

/**
 * Get a module by a keyword.
 * @param {[keyword: string, options?: DisplayNameOptions & KeywordOptions]} options The keyword and any options to change the behavior.
 * @returns {Module|Module[]|undefined} A module that has the given keyword, or undefined if no module was found. Will return an array of modules if `all` in the options is set to true.
 */
export function getByKeyword(...options: [
   keyword: string,
   options?: DisplayNameOptions & KeywordOptions
]): Module | Module[] | undefined {
   return window.enmity.modules.getByKeyword(...options);
}

export const common: import('./common').Common = window.enmity.modules.common;