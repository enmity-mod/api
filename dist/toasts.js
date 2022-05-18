var _a;
const toasts = (_a = window.enmity.toasts) !== null && _a !== void 0 ? _a : window.enmity.toast;
export function showToast(message) {
    toasts.showToast(message);
}
