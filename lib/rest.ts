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
   * Can be either a string or an object.
   */
  body?: string | Record<string, any>;

  /**
   * Headers for the request.
   * Must be an object.
   */
  headers?: Record<string, string>;
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
  return new Promise((resolve, reject) => {
    window.enmity.rest
      .get(data)
      .then((response: RestResponse) => {
        resolve(response);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

/**
 * Execute a post request.
 * @param {RestOptions | string} data Request's data, can be an URL or {@link RestOptions}
 * @returns {Promise<RestResponse>} Request's response
 */
async function postRequest(data: RestOptions | string): Promise<RestResponse> {
  return new Promise((resolve, reject) => {
    window.enmity.rest
      .post(data)
      .then((response: RestResponse) => {
        resolve(response);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

/**
 * Execute a PUT request.
 * @param {RestOptions | string} data Request's data, can be an URL or {@link RestOptions}
 * @returns {Promise<RestResponse>} Request's response
 */
async function putRequest(data: RestOptions | string): Promise<RestResponse> {
  return new Promise((resolve, reject) => {
    window.enmity.rest
      .put(data)
      .then((response: RestResponse) => {
        resolve(response);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

/**
 * Execute a PATCH request.
 * @param {RestOptions | string} data Request's data, can be an URL or {@link RestOptions}
 * @returns {Promise<RestResponse>} Request's response
 */
async function patchRequest(data: RestOptions | string): Promise<RestResponse> {
  return new Promise((resolve, reject) => {
    window.enmity.rest
      .patch(data)
      .then((response: RestResponse) => {
        resolve(response);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

/**
 * Execute a DELETE request.
 * @param {RestOptions | string} data Request's data, can be an URL or {@link RestOptions}
 * @returns {Promise<RestResponse>} Request's response
 */
async function deleteRequest(data: RestOptions | string): Promise<RestResponse> {
  return new Promise((resolve, reject) => {
    window.enmity.rest
      .delete(data)
      .then((response: RestResponse) => {
        resolve(response);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

/**
 * Get the base URL for Discord's API
 * @returns {Promise<string>}
 */
export async function getAPIBaseURL(): Promise<string> {
  return window.enmity.rest.getAPIBaseURL();
}

export {
  getRequest as get,
  postRequest as post,
  putRequest as put,
  patchRequest as patch,
  deleteRequest as delete,
};
