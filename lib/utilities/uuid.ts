/**
  * @name uuid
  * @description Returns a UUID with the length provided (default: 30)
  * @param {number} [length=30] - The length of the randomized UUID
  * @return {string} Returns the randomized UUID.
  */

export default function uuid<T extends number = 30>(length: number = 30): string & { readonly length: T; } {
   return window.enmity.utilities.uuid(length);
}