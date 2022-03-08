// eslint-disable-next-line @typescript-eslint/ban-types
type mdl = Function | object;

type patchCallback = (self: any, args: any[], res: any) => void;

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
  getPatchesByCaller: (id: string) => Patcher[],
  before: (...args: any[]) => void;
  instead: (...args: any[]) => void;
  after: (...args: any[])  => void;
}

function create(name: string): Patch {
  return window.enmity.patcher.create(name);
}

function before(caller: string, mdl: mdl, func: string, callback: patchCallback): Patchable {
  const unpatch = window.enmity.patcher.before(caller, mdl, func, callback);
  return {
    unpatchAll: unpatch
  };
}

function instead(caller: string, mdl: mdl, func: string, callback: patchCallback): Patchable {
  const unpatch = window.enmity.patcher.instead(caller, mdl, func, callback);
  return {
    unpatchAll: unpatch
  };
}

function after(caller: string, mdl: mdl, func: string, callback: patchCallback): Patchable {
  const unpatch = window.enmity.patcher.after(caller, mdl, func, callback);
  return {
    unpatchAll: unpatch
  };
}

export {
  create,
  before,
  instead,
  after
};