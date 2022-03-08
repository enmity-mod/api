function getTheme() {
    return window.enmity.themer.getTheme();
}
function listThemes() {
    return window.enmity.themer.listThemes();
}
function applyTheme(name) {
    window.enmity.themer.applyTheme(name);
}
function registerTheme(theme) {
    window.enmity.themer.registerTheme(theme);
}
function removeTheme() {
    window.enmity.themer.removeTheme();
}
export { getTheme, listThemes, applyTheme, registerTheme, removeTheme, };
