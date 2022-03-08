function create(name) {
    return window.enmity.patcher.create(name);
}
function before(caller, mdl, func, callback) {
    const unpatch = window.enmity.patcher.before(caller, mdl, func, callback);
    return {
        unpatchAll: unpatch
    };
}
function instead(caller, mdl, func, callback) {
    const unpatch = window.enmity.patcher.instead(caller, mdl, func, callback);
    return {
        unpatchAll: unpatch
    };
}
function after(caller, mdl, func, callback) {
    const unpatch = window.enmity.patcher.after(caller, mdl, func, callback);
    return {
        unpatchAll: unpatch
    };
}
export { create, before, instead, after };
