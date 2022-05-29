/**
  * @name findInTree
  * @description Searches through the walkables provided inside a tree.
  * @param {object|array} tree - The tree to search
  * @param {function} filter - The filter to use to resolve the search
  * @param {object} options - The options for the search
  * @param {array} [options.ignore=[]] - The keys to ignore in the search
  * @param {array} [options.walkable=[]] - The keys to walk/traverse in the search
  * @param {number} [options.maxProperties=100] - The keys to walk/traverse in the search
  * @return {function} Returns the function with a cacheable value
  */

export default function findInTree(
   tree: object,
   filter: (node: any) => any,
   options?: {
      ignore?: string[];
      walkable?: string[];
      maxProperties?: number;
   }
): any {
   return window.enmity.utilities.findInTree(tree, filter, options);
}