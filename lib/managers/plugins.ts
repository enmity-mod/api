import { Command } from '../api/commands';
import { EntityAuthor } from '../common';
import { Patcher } from '../patcher';

import React from 'react';
import { SettingsStore } from 'lib/api/settings';

/**
 * Represents a plugin.
 */
export interface Plugin {
   /**
    * Name of the plugin.
    */
   name: string;

   /**
    * Description of the plugin.
    */
   description: string;

   /**
    * Color of the plugin in settings.
    */
   color?: string;

   /**
    * Version of the plugin.
    */
   version: string;

   /**
    * Authors of the plugin.
    */
   authors: EntityAuthor[] | string[];

   /**
    * List of commands of the plugin.
    */
   commands?: Command[];

   /**
    * List of patchers of the plugin.
    */
   patches?: Patcher[];

   /**
    * Settings panel of the plugin.
    */
   getSettingsPanel?: (props: { settings: SettingsStore; }) => React.ComponentType;

   /**
    * Executed when the plugin is started.
    */
   onStart: () => void;

   /**
    * Executed when the plugin is stopped.
    */
   onStop: () => void;

   /**
    * Executed when the plugin is enabled.
    *
    * This method is overwritten by Enmity to do internal stuff.
    *
    * DO NOT OVERRIDE THIS.
    */
   onEnable?: () => void;

   /**
    * Executed when the plugin is disabled.
    *
    * This method is overwritten by Enmity to do internal stuff.
    *
    * DO NOT OVERRIDE THIS.
    */
   onDisable?: () => void;
}

/**
 * Register a plugin.
 * @param {Plugin} plugin Plugin to register.
 */
export function registerPlugin(plugin: Plugin): void {
   window.enmity.plugins.registerPlugin(plugin);
}

/**
 * Get a plugin by its name.
 * @param {string} name Plugin's name.
 * @returns {Plugin}
 */
export function getPlugin(name: string): Plugin {
   return window.enmity.plugins.getPlugin(name);
}

/**
 * Get all registered plugins.
 * @returns {Plugin[]}
 */
export function getPlugins(): Plugin[] {
   return window.enmity.plugins.getPlugins();
}
