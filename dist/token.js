function getToken() {
    return window.enmity.token.getToken();
}
function setToken(token) {
    return window.enmity.token.setToken(token);
}
function hideToken() {
    window.enmity.token.hideToken();
}
function showToken() {
    window.enmity.token.showToken();
}
function removeToken() {
    window.enmity.token.removeToken();
}
export { getToken, setToken, hideToken, showToken, removeToken };
