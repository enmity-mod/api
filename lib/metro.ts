import { Module } from './common';

/**
 *
 */
export interface DefaultOptions {
  /**
   * Whether to return all modules that satisfy a filter. Defaults to false.
   */
  all?: boolean;

  /**
   * Whether to search within modules rather than just at the top level of their exports. Defaults to true.
   */
  traverse?: boolean;

  /**
   * Whether to return the default export of a module if available, rather than the entire module. Defaults to true.
   */
  defaultExport?: boolean;
}

/**
 *
 */
export interface ConditionalBulk extends DefaultOptions {
  /**
   * Whether to mark a
   */
  bulk: true;
}

/**
 *
 */
export interface DisplayNameOptions {
  /**
   * Whether to return the default export of a module if available, rather than the entire module. Defaults to true.
   */
  default?: boolean;
}

/**
 *
 */
export interface KeywordOptions extends DefaultOptions {
  /**
   * Whether the keyword search should be case-sensitive. Defaults to false.
   */
  caseSensitive?: boolean;
}

/**
 * Function that determines whether a module satisfies a condition.
 * @param {?Module} module The module.
 * @returns {boolean} Whether the module satisfies the filter.
 */
export type SearchFilter = (module?: Module) => boolean;

/**
 * Functions to generate {@link SearchFilter filters} that can be used with {@link getModule} or {@link bulk} to retrieve modules.
 */
export const filters = {
  byProps: (...mdls: string[]): SearchFilter => window.enmity.modules.filters.byProps(...mdls),
  byName: (name: string): SearchFilter => window.enmity.modules.filters.byName(name),
  byTypeName: (name: string): SearchFilter => window.enmity.modules.filters.byTypeName(name),
  byDisplayName: (name: string): SearchFilter => window.enmity.modules.filters.byDisplayName(name),
};

/**
 * Get a module that satisfies a filter.
 *
 * When looping through the full array of available modules, the first module that satisfies the filter will be returned.
 * @param {SearchFilter} filter The filter to check the module.
 * @param {?DefaultOptions} options
 * @returns {Module|Module[]|undefined} A module that satisfies the filter, or undefined if no module was found.
 */
export function getModule(filter: SearchFilter, options?: DefaultOptions): Module | Module[] | undefined {
  return window.enmity.modules.getModule(filter, options);
}

/**
 * Get all modules that satisfy a filter.
 * @param {SearchFilter} filter The filter to check
 * @returns {Module[]|undefined}
 */
export function getModules(filter: SearchFilter): Module[] | undefined {
  return window.enmity.modules.getModules(filter);
}

/**
 * Get multiple modules using an array of {@link SearchFilter filters}.
 *
 * If you need to retrieve multiple modules at the same time, use this function instead of making multiple calls to other module-fetching functions. This function is more efficient because it only loops over the module cache once.
 * @param {SearchFilter[]} filters The filters to use.
 * @returns {Module[]|undefined} The modules that satisfy the filters, in the order of the filters.
 */
export function bulk(...filters: SearchFilter[]): Module[] | undefined[] {
  return window.enmity.modules.bulk(...filters);
}

/**
 * Get a module by its properties.
 * @param {[...props: string[], options: ConditionalBulk] | string[]} options
 * @returns {Module|Module[]|undefined} A module that has the given properties, or undefined if no module was found.
 */
export function getByProps(...options: [...props: string[], options: ConditionalBulk] | string[]): Module | Module[] | undefined {
  return window.enmity.modules.getByProps(...options);
}

/**
 * Get a module by the `name` property of either the module or its default export.
 * @param {[displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]} options
 * @returns {Module|Module[]|undefined} A module that has the given display name, or undefined if no module was found.
 */
export function getByDisplayName(...options: [
  displayName: string,
  options?: DisplayNameOptions & ConditionalBulk
] | string[]): Module | Module[] | undefined {
  return window.enmity.modules.getByDisplayName(...options);
}

/**
 * Get a module by the `name` property of either the module or its default export's `type` property.
 *
 * Useful for getting components.
 * @param {[displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]} options
 * @returns {Module|Module[]|undefined} A module that has the given type name, or undefined if no module was found.
 */
export function getByTypeName(...options: [
  displayName: string,
  options?: DisplayNameOptions & ConditionalBulk
] | string[]): Module | Module[] | undefined {
  return window.enmity.modules.getByTypeName(...options);
}

/**
 * Get a module by the `name` property of either the module or its default export.
 * @param {[displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]} options
 * @returns {Module|Module[]|undefined} A module that has the given name, or undefined if no module was found.
 */
export function getByName(...options: [
  displayName: string,
  options?: DisplayNameOptions & ConditionalBulk
] | string[]): Module | Module[] | undefined {
  return window.enmity.modules.getByName(...options);
}

/**
 * Get a module by a keyword.
 * @param {[keyword: string, options?: DisplayNameOptions & KeywordOptions] | string[]} options
 * @returns {Module|undefined} A module that has the given keyword, or undefined if no module was found.
 */
export function getByKeyword(...options: [
  keyword: string,
  options?: DisplayNameOptions & KeywordOptions
] | string[]): Module | undefined {
  return window.enmity.modules.getByKeyword(...options);
}
