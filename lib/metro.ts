export type Module = Record<string, any>;

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

export const filters = {
  byProps: (...mdls: string[]): SearchFilter => window.enmity.modules.filters.byProps(...mdls),
  byName: (name: string): SearchFilter => window.enmity.modules.filters.byName(name),
  byTypeName: (name: string): SearchFilter => window.enmity.modules.filters.byTypeName(name),
  byDisplayName: (name: string): SearchFilter => window.enmity.modules.filters.byDisplayName(name),
};

export function getModule(filter: SearchFilter, options?: DefaultOptions): Module {
  return window.enmity.modules.getModule(filter, options);
}

export function getModules(filter: SearchFilter): Module {
  return window.enmity.modules.getModules(filter);
}

export function bulk(...filter: SearchFilter[]): Module[] {
  return window.enmity.modules.bulk(...filter);
}

export function getByProps(...options: [...props: string[], options: ConditionalBulk] | string[]): Module {
  return window.enmity.modules.getByProps(...options);
}

export function getByDisplayName(...options: [displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]): Module {
  return window.enmity.modules.getByDisplayName(...options);
}

export function getByTypeName(...options: [displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]): Module {
  return window.enmity.modules.getByTypeName(...options);
}

export function getByName(...options: [displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]): Module {
  return window.enmity.modules.getByName(...options);
}

export function getByKeyword(...options: [keyword: string, options?: DisplayNameOptions & KeywordOptions] | string[]): Module {
  return window.enmity.modules.getByKeyword(...options);
}

declare global {
  interface Window {
    enmity: Record<string, any>;
  }
}