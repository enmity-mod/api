/**
 * Send a reply as Clyde
 */
function sendReply(channelID: string, content: string) {
  window.enmity.clyde.sendReply(channelID, content);
}

export {
  sendReply
}