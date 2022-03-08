import { Command } from "./commands";
import { Patchable } from "./patcher";
interface Plugin {
    name: string;
    commands?: Command[];
    patches?: Patchable[];
    onStart: () => void;
    onStop: () => void;
    onEnable?: () => void;
    onDisable?: () => void;
}
declare function registerPlugin(plugin: Plugin): void;
declare function getPlugin(name: string): any;
declare function getPlugins(): any;
export { Plugin, registerPlugin, getPlugin, getPlugins };
