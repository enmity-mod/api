interface RestOptions {
    url: string;
    body?: Record<string, any>;
}
interface RestResponse {
    ok: boolean;
    headers: Record<string, string>;
    body?: string | Record<string, any>;
    text: string;
    status: number;
}
declare function get(data: RestOptions | string): Promise<RestResponse>;
declare function post(data: RestOptions | string): Promise<RestResponse>;
declare function put(data: RestOptions | string): Promise<RestResponse>;
declare function patch(data: RestOptions | string): Promise<RestResponse>;
declare function _delete(data: RestOptions | string): Promise<RestResponse>;
declare function getAPIBaseURL(): Promise<any>;
export { get, post, put, patch, _delete as delete, getAPIBaseURL };
