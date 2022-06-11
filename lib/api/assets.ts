export interface Asset {
   __packager_asset?: boolean;

   /**
    * Name of the asset.
    */
   name: string;

   /**
    * Location of the asset in the local assets directory.
    */
   httpServerLocation?: string;

   /**
    * Width of the asset.
    */
   width: number;

   /**
    * Height of the asset.
    */
   height: number;

   /**
    * Scales that the asset is available in. For example: [1, 2] means that the asset is available in 1x and 2x sizes.
    */
   scales: number[];

   /**
    * Hash of the asset.
    */
   hash: string;

   /**
    * File extension of the asset.
    */
   type: string;

   /**
    * ID of the asset.
    */
   id: number;
}

/**
 * Find an asset by a filter.
 * @param {(Asset) => boolean} filter Filter to find the asset.
 * @returns {Asset} The asset.
 */
export function find(filter: (asset: Asset) => boolean): Asset {
   return window.enmity.assets.find(filter);
}

/**
 * Get an asset by its name.
 * @param name Name of the asset.
 * @returns {Asset} The asset.
 */
export function getByName(name: string): Asset {
   return window.enmity.assets.getByName(name);
}

/**
 * Get an asset by its ID.
 * @param {number} id ID of the asset.
 * @returns {Asset} The asset.
 */
export function getByID(id: number): Asset {
   return window.enmity.assets.getByID(id);
}

/**
 * Get the ID for an asset with a specified name.
 * @param {string} name Name of the asset.
 * @returns {number} ID of the asset.
 */
export function getIDByName(name: string): number {
   return window.enmity.assets.getIDByName(name);
}
