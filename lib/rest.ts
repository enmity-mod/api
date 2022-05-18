/**
 * Options for a request.
 */
export interface RestOptions {
  /**
   * URL of the request.
   */
  url: string;

  /**
   * Body of the request.
   * Must be an object.
   */
  body?: Record<string, any>;
}

/**
 * Response for a request.
 */
export interface RestResponse {
  /**
   * Is the request okay.
   */
  ok: boolean;

  /**
   * Response's headers.
   */
  headers: Record<string, string>;

  /**
   * Response's body.
   * Can be either a string or an object.
   */
  body?: string | Record<string, any>;

  /**
   * Response's text.
   */
  text: string;

  /**
   * Response's status code.
   */
  status: number;
}

/**
 * Execute a GET request.
 * @param {RestOptions | string} data Request's data, can be an URL or {@link RestOptions}
 * @returns {Promise<RestResponse>} Request's response
 */
async function getRequest(data: RestOptions | string): Promise<RestResponse> {
  return await window.enmity.rest.get(data);
}

/**
 * Execute a post request.
 * @param {RestOptions | string} data Request's data, can be an URL or {@link RestOptions}
 * @returns {Promise<RestResponse>} Request's response
 */
async function postRequest(data: RestOptions | string): Promise<RestResponse> {
  return await window.enmity.rest.post(data);
}

/**
 * Execute a PUT request.
 * @param {RestOptions | string} data Request's data, can be an URL or {@link RestOptions}
 * @returns {Promise<RestResponse>} Request's response
 */
async function putRequest(data: RestOptions | string): Promise<RestResponse> {
  return await window.enmity.rest.put(data);
}

/**
 * Execute a PATCH request.
 * @param {RestOptions | string} data Request's data, can be an URL or {@link RestOptions}
 * @returns {Promise<RestResponse>} Request's response
 */
async function patchRequest(data: RestOptions | string): Promise<RestResponse> {
  return await window.enmity.rest.patch(data);
}

/**
 * Execute a DELETE request.
 * @param {RestOptions | string} data Request's data, can be an URL or {@link RestOptions}
 * @returns {Promise<RestResponse>} Request's response
 */
async function deleteRequest(data: RestOptions | string): Promise<RestResponse> {
  return await window.enmity.rest.delete(data);
}

/**
 * Get the base URL for Discord's API
 * @returns {Promise<string>}
 */
export function getAPIBaseURL(): string {
  return window.enmity.rest.getAPIBaseURL();
}

export {
  getRequest as get,
  postRequest as post,
  putRequest as put,
  patchRequest as patch,
  deleteRequest as delete,
};
