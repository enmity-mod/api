import { Module } from './common';
export declare type PatchCallback = (self: any, args: any[], res: any) => void | any;
export interface Patch {
    caller: string;
    type: string;
    id: number;
    callback: PatchCallback;
    unpatch: () => void;
}
export interface Patcher {
    getPatchesByCaller: (id: string) => Patch[];
    before: (mdl: Module, func: string, callback: PatchCallback) => () => void;
    instead: (mdl: Module, func: string, callback: PatchCallback) => () => void;
    after: (mdl: Module, func: string, callback: PatchCallback) => () => void;
    unpatchAll: () => void;
}
export declare function create(name: string): Patcher;
export declare function before(caller: string, mdl: Module, func: string, callback: PatchCallback): () => void;
export declare function instead(caller: string, mdl: Module, func: string, callback: PatchCallback): () => void;
export declare function after(caller: string, mdl: Module, func: string, callback: PatchCallback): () => void;
