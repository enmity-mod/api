import { Module } from './common';

export interface DefaultOptions {
  all?: boolean;
  cache?: boolean;
  force?: boolean;
  defaultExport?: boolean;
}

export interface WaitForOptions {
  retries?: number;
  all?: boolean;
  forever?: boolean;
  delay?: number;
}

export interface ConditionalDefault extends DefaultOptions {
  wait?: false;
}

export interface ConditionalWaitFor extends WaitForOptions {
  wait: true;
}

export interface ConditionalBulk extends ConditionalDefault {
  bulk: true;
}

export interface ConditionalWaitBulk extends ConditionalWaitFor {
  bulk: true;
}

export interface DisplayNameOptions {
  default?: boolean;
}

export interface KeywordOptions extends DefaultOptions {
  caseSensitive?: boolean;
}

export type SearchFilter = (module: Module) => boolean;

/**
 * Filters
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
 * @param {SearchFilter} filter 
 * @param {?DefaultOptions} options 
 * @returns {Module|undefined} A module that satisfies the filter, or undefined if no modules were found.
 */
export function getModule(filter: SearchFilter, options?: DefaultOptions): Module | undefined {
  return window.enmity.modules.getModule(filter, options);
}

/**
 * Get all modules that satisfy a filter.
 * @param {SearchFilter} filter 
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
 * Get a module by its unique properties.
 * @param options 
 * @returns {Module|undefined}
 */
export function getByProps(...options: [...props: string[], options: ConditionalBulk] | string[]): Module | undefined {
  return window.enmity.modules.getByProps(...options);
}

/**
 * Get a module by the `name` property of either the module or its default export.
 * @param options 
 * @returns {Module|undefined}
 */
export function getByDisplayName(...options: [displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]): Module | undefined {
  return window.enmity.modules.getByDisplayName(...options);
}

/**
 * Get a module by the `name` property of either the module or its default export's `type` property.
 * 
 * Useful for getting components.
 * @param options 
 * @returns {Module|undefined}
 */
export function getByTypeName(...options: [displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]): Module | undefined {
  return window.enmity.modules.getByTypeName(...options);
}

/**
 * Get a module by the `name` property of either the module or its default export.
 * @param options 
 * @returns {Module|undefined}
 */
export function getByName(...options: [displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]): Module | undefined {
  return window.enmity.modules.getByName(...options);
}

/**
 * Get a module by a keyword.
 * @param options 
 * @returns {Module|undefined}
 */
export function getByKeyword(...options: [keyword: string, options?: DisplayNameOptions & KeywordOptions] | string[]): Module | undefined {
  return window.enmity.modules.getByKeyword(...options);
}
