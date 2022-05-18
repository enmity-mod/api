export interface RestOptions {
    url: string;
    body?: Record<string, any>;
}
export interface RestResponse {
    ok: boolean;
    headers: Record<string, string>;
    body?: string | Record<string, any>;
    text: string;
    status: number;
}
declare function getRequest(data: RestOptions | string): Promise<RestResponse>;
declare function postRequest(data: RestOptions | string): Promise<RestResponse>;
declare function putRequest(data: RestOptions | string): Promise<RestResponse>;
declare function patchRequest(data: RestOptions | string): Promise<RestResponse>;
declare function deleteRequest(data: RestOptions | string): Promise<RestResponse>;
export declare function getAPIBaseURL(): string;
export { getRequest as get, postRequest as post, putRequest as put, patchRequest as patch, deleteRequest as delete, };
