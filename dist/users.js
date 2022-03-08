async function fetchCurrentUser() {
    return new Promise((resolve, reject) => {
        window.enmity.users.fetchCurrentUser().then((user) => {
            resolve(user);
        }).catch(reject);
    });
}
async function fetchProfile(userID) {
    return new Promise((resolve, reject) => {
        window.enmity.users.fetchProfile(userID).then((user) => {
            resolve(user);
        }).catch(reject);
    });
}
async function getUser(userID) {
    return new Promise((resolve, reject) => {
        window.enmity.users.getUser(userID).then((user) => {
            resolve(user);
        }).catch(reject);
    });
}
export { fetchCurrentUser, fetchProfile, getUser };
