/**
  * @name wrapInHooks
  * @description Force renders a React component.
  * @param {number} component - The React component to handle.
  * @return {(...args): any => any} Returns (...args) => any
  */

export default function wrapInHooks(component: any): (...args: any) => any {
   return window.enmity.utilities.wrapInHooks(component);
}