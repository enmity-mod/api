export function create(name) {
    return window.enmity.patcher.create(name);
}
export function before(caller, mdl, func, callback) {
    return window.enmity.patcher.before(caller, mdl, func, callback);
}
export function instead(caller, mdl, func, callback) {
    return window.enmity.patcher.instead(caller, mdl, func, callback);
}
export function after(caller, mdl, func, callback) {
    return window.enmity.patcher.after(caller, mdl, func, callback);
}
