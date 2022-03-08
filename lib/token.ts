function getToken(): string {
  return window.enmity.token.getToken();
}

function setToken(token: string): string {
  return window.enmity.token.setToken(token);
}

function hideToken(): void {
  window.enmity.token.hideToken();
}

function showToken(): void {
  window.enmity.token.showToken();
}

function removeToken(): void {
  window.enmity.token.removeToken();
}

export {
  getToken,
  setToken,
  hideToken,
  showToken,
  removeToken
};