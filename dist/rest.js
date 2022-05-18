async function getRequest(data) {
    return await window.enmity.rest.get(data);
}
async function postRequest(data) {
    return await window.enmity.rest.post(data);
}
async function putRequest(data) {
    return await window.enmity.rest.put(data);
}
async function patchRequest(data) {
    return await window.enmity.rest.patch(data);
}
async function deleteRequest(data) {
    return await window.enmity.rest.delete(data);
}
export function getAPIBaseURL() {
    return window.enmity.rest.getAPIBaseURL();
}
export { getRequest as get, postRequest as post, putRequest as put, patchRequest as patch, deleteRequest as delete, };
