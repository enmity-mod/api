/**
  * @name debounce
  * @description Throttles a function by the provided milliseconds
  * @param {function} func - The function to debounce
  * @param {number} ms - The milliseconds to debounce the function by
  * @return {function} Returns an instance of the function wrapped in a debounce
  */

export default function debounce<T extends Function>(func: T, ms: number): T {
   return window.enmity.utilities.debounce(func, ms);
}