export function setString(text) {
    window.enmity.clipboard.setString(text);
}
export async function getString() {
    return window.enmity.clipboard.getString();
}
