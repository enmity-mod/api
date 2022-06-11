import React from 'react';

/**
 * JSON-serializable object that can be stored as the value of a setting.
 */
export type Serializable = string | number | boolean | null | {
   [key: string | number]: Serializable;
} | Serializable[];

/**
 * Callback used to {@link subscribe} to changes in a settings category.
 */
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
    * @param {?boolean} defaults Default value to use if the setting does not exist.
    * @returns {boolean} Value of the setting as a boolean.
    */
   getBoolean: (key: string, defaults?: boolean) => boolean;
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
 * @param {?boolean} defaults Default value to use if the setting does not exist.
 * @returns {boolean} Value of the setting as a boolean.
 */
export function getBoolean(file: string, setting: string, defaults?: boolean): boolean {
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
 * Wrap a React component so that it will be rerendered whenever a setting is changed in a category.
 *
 * The component will have a prop, `settings`, that is a {@link SettingsStore} for the specified category.
 * @param {React.ComponentType} component Component to wrap.
 * @param {string} file Settings category.
 * @returns {React.ComponentType} Wrapped component.
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
 * Wrap a React component so that it will be rerendered whenever any setting for any Enmity category is changed.
 *
 * The component will have a prop, `settings`, that is a {@link SettingsStore} for the specified category.
 *
 * Do not use this unless you need integration with other plugins. Prefer {@link connectComponent} to avoid needless performance impacts.
 * @param {React.ComponentType} component Component to wrap.
 * @param {string} file Settings category.
 * @returns {React.ComponentType} Wrapped component.
 */
export function connectStores(component: React.ComponentType, file: string): React.ComponentType {
   return window.enmity.settings.connectStores(component, file);
}
