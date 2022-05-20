export interface SettingsStore {
    settings: any;
    set: (key: string, value: any) => void;
    get: (key: string, defaults: any) => any;
    toggle: (key: string, defaults: boolean) => void;
    getBoolean: (key: string, defaults: any) => boolean;
}
export declare function set(file: string, setting: string, value: any): void;
export declare function get(file: string, setting: string, defaults?: any): any;
export declare function getBoolean(file: string, setting: string, defaults?: any): boolean;
export declare function toggle(file: string, setting: string, defaults: boolean): void;
export declare function connectComponent(component: Function | Object, file: string): Function;
export declare function makeStore(file: string): SettingsStore;
export declare function subscribe(file: string, callback: (args: Record<string, any>) => void): void;
export declare function unsubscribe(file: string, callback: (args: Record<string, any>) => void): void;
export declare function connectStores(file: string): Function;
