export declare function getModule(filter: (module: ModuleExports) => boolean, exports?: true): ModuleExports;
export declare function getModule(filter: (module: ModuleExports) => boolean, exports?: false): Module;
export declare function getModules(filter: (module: ModuleExports) => boolean, first?: boolean): number[];
export declare function getModuleByProps(...props: string[]): ModuleExports;
export declare function getModuleByIndex(id: string): Module;
declare global {
    interface Window {
        enmity: Record<string, any>;
    }
}
export interface Module {
    id: string;
    exports: ModuleExports;
}
export interface ModuleExports {
    default?: {
        [key: string]: any;
    };
    [key: string]: any;
}
