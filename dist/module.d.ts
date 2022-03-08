declare function getModule(filter: (module: any) => boolean, exports?: true): ExportedModule;
declare function getModule(filter: (module: any) => boolean, exports?: false): Module;
declare function getModules(filter: (module: any) => boolean, first?: boolean): number[];
declare function getModuleByProps(...props: string[]): ExportedModule;
declare function getModuleByIndex(id: string): Module;
declare global {
    interface Window {
        enmity: any;
    }
}
declare interface Module {
    id: string;
    exports: ExportedModule;
}
declare interface ExportedModule {
    default?: {
        [key: string]: any;
    };
    [key: string]: any;
}
export { getModule, getModules, getModuleByProps, getModuleByIndex };
