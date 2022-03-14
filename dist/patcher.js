export function create(name) {
    return window.enmity.patcher.create(name);
}
export function before(caller, mdl, func, callback) {
    const unpatch = window.enmity.patcher.before(caller, mdl, func, callback);
    return {
        unpatchAll: unpatch,
    };
}
export function instead(caller, mdl, func, callback) {
    const unpatch = window.enmity.patcher.instead(caller, mdl, func, callback);
    return {
        unpatchAll: unpatch,
    };
}
export function after(caller, mdl, func, callback) {
    const unpatch = window.enmity.patcher.after(caller, mdl, func, callback);
    return {
        unpatchAll: unpatch,
    };
}
