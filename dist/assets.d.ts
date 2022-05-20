export interface Asset {
    __packager_asset?: boolean;
    name: string;
    httpServerLocation?: string;
    width: number;
    height: number;
    scales: number[];
    hash: string;
    type: string;
    id: number;
}
export declare function find(filter: (asset: Asset) => boolean): Asset;
export declare function getByName(name: string): Asset;
export declare function getByID(id: number): Asset;
export declare function getIDByName(name: string): number;
