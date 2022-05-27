import { Module } from './common';
export interface DefaultOptions {
    all?: boolean;
    traverse?: boolean;
    defaultExport?: boolean;
}
export interface ConditionalBulk extends DefaultOptions {
    bulk: true;
}
export interface DisplayNameOptions {
    default?: boolean;
}
export interface KeywordOptions extends DefaultOptions {
    caseSensitive?: boolean;
}
export declare type SearchFilter = (module?: Module) => boolean;
export declare const filters: {
    byProps: (...mdls: string[]) => SearchFilter;
    byName: (name: string) => SearchFilter;
    byTypeName: (name: string) => SearchFilter;
    byDisplayName: (name: string) => SearchFilter;
};
export declare function getModule(filter: SearchFilter, options?: DefaultOptions): Module | Module[] | undefined;
export declare function getModules(filter: SearchFilter): Module[] | undefined;
export declare function bulk(...filters: SearchFilter[]): Module[] | undefined[];
export declare function getByProps(...options: [...props: string[], options: ConditionalBulk] | string[]): Module | Module[] | undefined;
export declare function getByDisplayName(...options: [
    displayName: string,
    options?: DisplayNameOptions & ConditionalBulk
] | string[]): Module | Module[] | undefined;
export declare function getByTypeName(...options: [
    displayName: string,
    options?: DisplayNameOptions & ConditionalBulk
] | string[]): Module | Module[] | undefined;
export declare function getByName(...options: [
    displayName: string,
    options?: DisplayNameOptions & ConditionalBulk
] | string[]): Module | Module[] | undefined;
export declare function getByKeyword(...options: [
    keyword: string,
    options?: DisplayNameOptions & KeywordOptions
] | string[]): Module | undefined;
