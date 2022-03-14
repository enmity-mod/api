/**
 * Get the user's token.
 */
export function getToken(): string {
  return window.enmity.token.getToken();
}

/**
 * Set the token.
 * @param {string} token
 */
export function setToken(token: string): void {
  return window.enmity.token.setToken(token);
}
