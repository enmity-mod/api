interface Module {
    [key: string]: any;
}
interface DefaultOptions {
    all?: boolean;
    cache?: boolean;
    force?: boolean;
    defaultExport?: boolean;
}
interface ConditionalDefault extends DefaultOptions {
    wait?: false;
}
interface ConditionalBulk extends ConditionalDefault {
    bulk: true;
}
interface DisplayNameOptions {
    default?: boolean;
}
interface KeywordOptions extends DefaultOptions {
    caseSensitive?: boolean;
}
declare type SearchFilter = (module: Module) => boolean;
export declare const filters: {
    byProps: (...mdls: string[]) => SearchFilter;
    byName: (name: string) => SearchFilter;
    byTypeName: (name: string) => SearchFilter;
    byDisplayName: (name: string) => SearchFilter;
};
export declare function getModule(filter: SearchFilter, options?: DefaultOptions): Module;
export declare function getModules(filter: SearchFilter): Module;
export declare function bulk(...filter: SearchFilter[]): Module[];
export declare function getByProps(...options: [...props: string[], options: ConditionalBulk] | string[]): Module;
export declare function getByDisplayName(...options: [displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]): Module;
export declare function getByTypeName(...options: [displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]): Module;
export declare function getByName(...options: [displayName: string, options?: DisplayNameOptions & ConditionalBulk] | string[]): Module;
export declare function getByKeyword(...options: [keyword: string, options?: DisplayNameOptions & KeywordOptions] | string[]): Module;
declare global {
    interface Window {
        enmity: Record<string, any>;
    }
}
export {};
