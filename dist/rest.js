async function getRequest(data) {
    return new Promise((resolve, reject) => {
        window.enmity.rest.get(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function postRequest(data) {
    return new Promise((resolve, reject) => {
        window.enmity.rest.post(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function putRequest(data) {
    return new Promise((resolve, reject) => {
        window.enmity.rest.put(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function patchRequest(data) {
    return new Promise((resolve, reject) => {
        window.enmity.rest.patch(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function deleteRequest(data) {
    return new Promise((resolve, reject) => {
        window.enmity.rest.delete(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
export async function getAPIBaseURL() {
    return window.enmity.rest.getAPIBaseURL();
}
export { getRequest as get, postRequest as post, putRequest as put, patchRequest as patch, deleteRequest as delete, };
