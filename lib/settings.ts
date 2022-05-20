export interface SettingsStore {
  settings: any;
  set: (key: string, value: any) => void;
  get: (key: string, defaults: any) => any;
  toggle: (key: string, defaults: boolean) => void;
  getBoolean: (key: string, defaults: any) => boolean;
}

/**
 * Set a setting.
 * @param {string} file 
 * @param {string} setting 
 * @param {any} value 
 * @returns {void}
 */
export function set(file: string, setting: string, value: any): void {
  return window.enmity.settings.set(file, setting, value);
}

/**
 * Get a setting.
 * @param {string} file 
 * @param {string} setting 
 * @param {?any} defaults Default value if the setting does not exist
 * @returns {any} Setting's value
 */
export function get(file: string, setting: string, defaults?: any): any {
  return window.enmity.settings.get(file, setting, defaults);
}

/**
 * Get a setting as a boolean.
 * @param {string} file 
 * @param {string} setting 
 * @param {?any} defaults Default value if the setting does not exist
 * @returns {boolean} Setting's value as a boolean
 */
export function getBoolean(file: string, setting: string, defaults?: any): boolean {
  return window.enmity.settings.getBoolean(file, setting, defaults);
}

/**
 * Toggle a setting.
 * @param {string} file 
 * @param {string} setting 
 * @param {boolean} defaults 
 * @returns {void}
 */
export function toggle(file: string, setting: string, defaults: boolean): void {
  return window.enmity.settings.toggle(file, setting, defaults);
}

/**
 * 
 * @param {Function | Object} component 
 * @param {string} file 
 * @returns 
 */
export function connectComponent(component: Function | Object, file: string): Function {
  return window.enmity.settings.connectComponent(component, file);
}

/**
 * Create a settings store.
 * @param {string} file 
 * @returns {SettingsStore}
 */
export function makeStore(file: string): SettingsStore {
  return window.enmity.settings.makeStore(file);
}

/**
 * 
 * @param {string} file 
 * @param {} callback 
 */
export function subscribe(file: string, callback: (args: Record<string, any>) => void): void {
  window.enmity.settings.subscribe(file, callback);
}

/**
 * 
 * @param {string} file 
 * @param callback 
 */
export function unsubscribe(file: string, callback: (args: Record<string, any>) => void): void {
  window.enmity.settings.unsubscribe(file, callback);
}

/**
 * 
 * @param {string} file 
 * @returns 
 */
export function connectStores(file: string): Function {
  return window.enmity.settings.connectStores(file);
}