import { Module } from './common';
export interface BaseOptions {
    all?: boolean;
    traverse?: boolean;
    defaultExport?: boolean;
}
export interface ConditionalBulk extends BaseOptions {
    bulk?: true;
}
export interface DisplayNameOptions {
    default?: boolean;
}
export interface KeywordOptions extends BaseOptions {
    caseSensitive?: boolean;
}
export declare type SearchFilter = (module?: Module) => boolean;
export declare const filters: {
    byProps: (...mdls: string[]) => SearchFilter;
    byName: (name: string) => SearchFilter;
    byTypeName: (name: string) => SearchFilter;
    byDisplayName: (name: string) => SearchFilter;
};
export declare function getModule(filter: SearchFilter, options?: BaseOptions): Module | Module[] | undefined;
export declare function getModules(filter: SearchFilter): Module[];
export declare function bulk(...filters: SearchFilter[]): (Module | undefined)[];
export declare function getByProps(...options: string[] | [
    ...props: string[] | (string[])[],
    options: ConditionalBulk
]): (Module | undefined) | (Module | undefined)[];
export declare function getByDisplayName(...options: [
    displayName: string,
    options?: DisplayNameOptions & ConditionalBulk
] | string[]): (Module | undefined) | (Module | undefined)[];
export declare function getByTypeName(...options: [
    typeName: string,
    options?: DisplayNameOptions & ConditionalBulk
] | string[]): (Module | undefined) | (Module | undefined)[];
export declare function getByName(...options: [
    displayName: string,
    options?: DisplayNameOptions & ConditionalBulk
] | string[]): (Module | undefined) | (Module | undefined)[];
export declare function getByKeyword(...options: [
    keyword: string,
    options?: DisplayNameOptions & KeywordOptions
]): Module | Module[] | undefined;
