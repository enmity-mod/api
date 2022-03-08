async function get(data) {
    return new Promise((resolve, reject) => {
        window.enmity.rest.get(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function post(data) {
    return new Promise((resolve, reject) => {
        window.enmity.rest.post(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function put(data) {
    return new Promise((resolve, reject) => {
        window.enmity.rest.put(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function patch(data) {
    return new Promise((resolve, reject) => {
        window.enmity.rest.patch(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function _delete(data) {
    return new Promise((resolve, reject) => {
        window.enmity.rest.delete(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function getAPIBaseURL() {
    return window.enmity.rest.getAPIBaseURL();
}
export { get, post, put, patch, _delete as delete, getAPIBaseURL };
