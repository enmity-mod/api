import { Command } from './commands';
import { Patchable } from './patcher';
export interface Plugin {
    name: string;
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
