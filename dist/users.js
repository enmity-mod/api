export async function fetchCurrentUser() {
    return await window.enmity.users.fetchCurrentUser();
}
export async function fetchProfile(userID) {
    return await window.enmity.users.fetchProfile(userID);
}
export async function getUser(userID) {
    return await window.enmity.users.getUser(userID);
}
