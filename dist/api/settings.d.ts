import React from 'react';
export declare type Serializable = string | number | boolean | null | {
    [key: string | number]: Serializable;
} | Serializable[];
export declare type SettingsCallback = (args: {
    setting: string;
    value: Serializable;
}) => void;
export interface SettingsStore {
    settings: Record<string, Serializable>;
    set: (key: string, value: Serializable) => void;
    get: (key: string, defaults?: Serializable) => Serializable;
    toggle: (key: string, defaults?: boolean) => void;
    getBoolean: (key: string, defaults?: boolean) => boolean;
}
export declare function set(file: string, setting: string, value: Serializable): void;
export declare function get(file: string, setting: string, defaults?: Serializable): Serializable;
export declare function getBoolean(file: string, setting: string, defaults?: boolean): boolean;
export declare function toggle(file: string, setting: string, defaults?: boolean): void;
export declare function connectComponent(component: React.ComponentType, file: string): React.ComponentType;
export declare function makeStore(file: string): SettingsStore;
export declare function subscribe(file: string, callback: SettingsCallback): void;
export declare function unsubscribe(file: string, callback: SettingsCallback): void;
export declare function connectStores(component: React.ComponentType, file: string): React.ComponentType;
