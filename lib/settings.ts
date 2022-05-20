type ReactElement = Object;
type ReactComponent = (props: Record<string, any>) => ReactElement;

interface SettingsCallbackArgs {
  /**
   * Key of the setting.
   */
  setting: string;

  /**
   * Value of the setting.
   */
  value: any;
}

type SettingsCallback = (args: SettingsCallbackArgs) => void;

export interface SettingsStore {
  /**
   * Stored settings.
   */
  settings: Record<string, any>;

  /**
   * Set a setting.
   * @param {string} key Key of the setting.
   * @param {?any} value Value of the setting.
   */
  set: (key: string, value: any) => void;

  /**
   * Get a setting.
   * @param {string} key Key of the setting.
   * @param {?any} defaults Default value to use if the setting does not exist.
   * @returns {any} Value of the setting.
   */
  get: (key: string, defaults?: any) => any;

  /**
   * Toggle a setting.
   * @param {string} key Key of the setting.
   * @param {?any} defaults Default value to use if the setting does not exist.
   */
  toggle: (key: string, defaults: boolean) => void;

  /**
   * Get a setting as a boolean.
   * @param {string} key Key of the setting.
   * @param {?any} defaults Default value to use if the setting does not exist.
   * @returns {boolean} Value of the setting as a boolean.
   */
  getBoolean: (key: string, defaults?: any) => boolean;
}

/**
 * Set a setting.
 * @param {string} file Category of the setting.
 * @param {string} setting Key of the setting.
 * @param {any} value Value of the setting.
 */
export function set(file: string, setting: string, value: any): void {
  window.enmity.settings.set(file, setting, value);
}

/**
 * Get a setting.
 * @param {string} file Category of the setting.
 * @param {string} setting Key of the setting.
 * @param {?any} defaults Default value to use if the setting does not exist.
 * @returns {any} Value of the setting.
 */
export function get(file: string, setting: string, defaults?: any): any {
  return window.enmity.settings.get(file, setting, defaults);
}

/**
 * Get a setting as a boolean.
 * @param {string} file Category of the setting.
 * @param {string} setting Key of the setting.
 * @param {?any} defaults Default value to use if the setting does not exist.
 * @returns {boolean} Value of the setting as a boolean.
 */
export function getBoolean(file: string, setting: string, defaults?: any): boolean {
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
 * @param {Function | Object} component
 * @param {string} file Settings category.
 * @returns {ReactComponent} React componnet that includes the {@link SettingsStore} in its props.
 */
export function connectComponent(component: Function | Object, file: string): ReactComponent {
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
