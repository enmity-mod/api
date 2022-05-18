export declare type Mdl = Function | object;
export declare type PatchCallback = (self: any, args: any[], res: any) => void;
export interface Patchable {
    unpatchAll: () => void;
}
export interface Patcher {
    caller: string;
    type: string;
    id: number;
    callback: PatchCallback;
    unpatch: () => void;
}
export interface Patch extends Patchable {
    getPatchesByCaller: (id: string) => Patcher[];
    before: (mdl: Mdl, func: string, callback: PatchCallback) => () => void;
    instead: (mdl: Mdl, func: string, callback: PatchCallback) => () => void;
    after: (mdl: Mdl, func: string, callback: PatchCallback) => () => void;
}
export declare function create(name: string): Patch;
export declare function before(caller: string, mdl: Mdl, func: string, callback: PatchCallback): () => void;
export declare function instead(caller: string, mdl: Mdl, func: string, callback: PatchCallback): () => void;
export declare function after(caller: string, mdl: Mdl, func: string, callback: PatchCallback): () => void;
