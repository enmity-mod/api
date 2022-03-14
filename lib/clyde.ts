/**
 * Send a reply as Clyde.
 * @param {string} channelID ID of the channel to reply in
 * @param {string} content Content of the message
 */
export function sendReply(channelID: string, content: string): void {
  window.enmity.clyde.sendReply(channelID, content);
}
