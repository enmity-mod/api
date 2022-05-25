import React from 'react';

export type Serializable = string | number | boolean | {
  [key: string | number]: Serializable;
} | Serializable[];

export type SettingsCallback = (args: {
  /**
   * Key of the setting.
   */
  setting: string;

  /**
   * Value of the setting.
   */
  value: Serializable;
}) => void;

export interface SettingsStore {
  /**
   * Stored settings.
   */
  settings: Record<string, Serializable>;

  /**
   * Set a setting.
   * @param {string} key Key of the setting.
   * @param {?Serializable} value Value of the setting.
   */
  set: (key: string, value: Serializable) => void;

  /**
   * Get a setting.
   * @param {string} key Key of the setting.
   * @param {?Serializable} defaults Default value to use if the setting does not exist.
   * @returns {Serializable} Value of the setting.
   */
  get: (key: string, defaults?: Serializable) => Serializable;

  /**
   * Toggle a setting.
   * @param {string} key Key of the setting.
   * @param {?boolean} defaults Default value to use if the setting does not exist.
   */
  toggle: (key: string, defaults?: boolean) => void;

  /**
   * Get a setting as a boolean.
   * @param {string} key Key of the setting.
   * @param {?Serializable} defaults Default value to use if the setting does not exist.
   * @returns {boolean} Value of the setting as a boolean.
   */
  getBoolean: (key: string, defaults?: Serializable) => boolean;
}

/**
 * Set a setting.
 * @param {string} file Category of the setting.
 * @param {string} setting Key of the setting.
 * @param {Serializable} value Value of the setting.
 */
export function set(file: string, setting: string, value: Serializable): void {
  window.enmity.settings.set(file, setting, value);
}

/**
 * Get a setting.
 * @param {string} file Category of the setting.
 * @param {string} setting Key of the setting.
 * @param {?Serializable} defaults Default value to use if the setting does not exist.
 * @returns {Serializable} Value of the setting.
 */
export function get(file: string, setting: string, defaults?: Serializable): Serializable {
  return window.enmity.settings.get(file, setting, defaults);
}

/**
 * Get a setting as a boolean.
 * @param {string} file Category of the setting.
 * @param {string} setting Key of the setting.
 * @param {?Serializable} defaults Default value to use if the setting does not exist.
 * @returns {boolean} Value of the setting as a boolean.
 */
export function getBoolean(file: string, setting: string, defaults?: Serializable): boolean {
  return window.enmity.settings.getBoolean(file, setting, defaults);
}

/**
 * Toggle a setting.
 * @param {string} file Category of the setting.
 * @param {string} setting Key of the setting.
 * @param {?boolean} defaults Default value to use if the setting does not exist.
 */
export function toggle(file: string, setting: string, defaults?: boolean): void {
  window.enmity.settings.toggle(file, setting, defaults);
}

/**
 * Create a React component that includes a {@link SettingsStore} in its props for a category.
 * @param {React.ComponentType} component Component to wrap.
 * @param {string} file Settings category.
 * @returns {React.ComponentType} React component that includes the {@link SettingsStore} in its props.
 */
export function connectComponent(component: React.ComponentType, file: string): React.ComponentType {
  return window.enmity.settings.connectComponent(component, file);
}

/**
 * Create a settings store.
 * @param {string} file Settings category.
 * @returns {SettingsStore} Settings store.
 */
export function makeStore(file: string): SettingsStore {
  return window.enmity.settings.makeStore(file);
}

/**
 * Subscribe to changes to settings in a category.
 * @param {string} file Settings category.
 * @param {SettingsCallback} callback Callback to run when a setting is updated.
 */
export function subscribe(file: string, callback: SettingsCallback): void {
  window.enmity.settings.subscribe(file, callback);
}

/**
 * Unsubscribe from changes to settings in a category.
 * @param {string} file Settings category.
 * @param {SettingsCallback} callback Callback to run when a setting is updated.
 */
export function unsubscribe(file: string, callback: SettingsCallback): void {
  window.enmity.settings.unsubscribe(file, callback);
}

/**
 *
 * @param {string} file Settings category.
 * @returns {Function}
 */
export function connectStores(file: string): Function {
  return window.enmity.settings.connectStores(file);
}
