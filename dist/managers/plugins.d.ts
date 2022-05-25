import { Command } from '../api/commands';
import { EntityAuthor } from '../common';
import { Patcher } from '../patcher';
import React from 'react';
export interface Plugin {
    name: string;
    description?: string;
    color?: string;
    version?: string;
    authors?: EntityAuthor[] | string[];
    commands?: Command[];
    patches?: Patcher[];
    getSettingsPanel: React.ComponentType;
    onStart: () => void;
    onStop: () => void;
    onEnable?: () => void;
    onDisable?: () => void;
}
export declare function registerPlugin(plugin: Plugin): void;
export declare function getPlugin(name: string): void;
export declare function getPlugins(): Plugin[];
