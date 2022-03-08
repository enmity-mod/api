declare type mdl = Function | object;
declare type patchCallback = (self: any, args: any[], res: any) => void;
export interface Patchable {
    unpatchAll: () => void;
}
interface Patcher {
    caller: string;
    type: string;
    id: number;
    callback: patchCallback;
    unpatch: () => void;
}
export interface Patch extends Patchable {
    getPatchesByCaller: (id: string) => Patcher[];
    before: (...args: any[]) => void;
    instead: (...args: any[]) => void;
    after: (...args: any[]) => void;
}
declare function create(name: string): Patch;
declare function before(caller: string, mdl: mdl, func: string, callback: patchCallback): Patchable;
declare function instead(caller: string, mdl: mdl, func: string, callback: patchCallback): Patchable;
declare function after(caller: string, mdl: mdl, func: string, callback: patchCallback): Patchable;
export { create, before, instead, after };
