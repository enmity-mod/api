/**
  * @name findInReactTree
  * @description Traverses through a react tree
  * @param {(object|array)} tree - The tree to search through
  * @param {function} filter - The filter to run on the tree passed as the first argument
  * @param {object} options - Options to pass to findInTree
  * @return {any} Returns null if nothing is filtered or the value that is filtered.
  */

export default function findInReactTree(
   tree: object,
   filter: (node: any) => any,
   options?: {
      ignore?: string[];
      walkable?: string[];
      maxProperties?: number;
   }
): any {
   return window.enmity.utilities.findInReactTree(tree, filter, options);
}