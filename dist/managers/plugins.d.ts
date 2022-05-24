import { Command } from '../api/commands';
import { Patcher } from '../patcher';
import { EntityAuthor } from '../common';
export interface Plugin {
    name: string;
    description?: string;
    color?: string;
    version?: string;
    authors?: EntityAuthor[] | string[];
    commands?: Command[];
    patches?: Patcher[];
    onStart: () => void;
    onStop: () => void;
    onEnable?: () => void;
    onDisable?: () => void;
}
export declare function registerPlugin(plugin: Plugin): void;
export declare function getPlugin(name: string): void;
export declare function getPlugins(): Plugin[];
