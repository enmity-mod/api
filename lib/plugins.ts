import { Command } from './commands';
import { Patchable } from './patcher';

/**
 * Represents a plugin.
 */
export interface Plugin {
  /**
   * Name of the plugin.
   */
  name: string;

  /**
   * List of commands of the plugin.
   */
  commands?: Command[];

  /**
   * List of patches of the plugin.
   */
  patches?: Patchable[];

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
 * @param {Plugin} plugin Plugin to register
 */
export function registerPlugin(plugin: Plugin): void {
  window.enmity.plugins.registerPlugin(plugin);
}

/**
 * Get a plugin via its name.
 * @param {string} name Plugin's name
 */
export function getPlugin(name: string): void {
  return window.enmity.plugins.getPlugin(name);
}

/**
 * Get all registered plugins.
 * @returns {Plugin[]}
 */
export function getPlugins(): Plugin[] {
  return window.enmity.plugins.getPlugins();
}
