import { Command } from '../api/commands';
import { Patchable } from '../patcher';
import { Author } from './common';
export interface Plugin {
    name: string;
    description?: string;
    color?: string;
    version?: string;
    authors?: Author[] | string[];
    commands?: Command[];
    patches?: Patchable[];
    onStart: () => void;
    onStop: () => void;
    onEnable?: () => void;
    onDisable?: () => void;
}
export declare function registerPlugin(plugin: Plugin): void;
export declare function getPlugin(name: string): void;
export declare function getPlugins(): Plugin[];
