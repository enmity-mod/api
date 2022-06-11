/**
 * Send a reply as Clyde.
 * @param {string} channelID ID of the channel to reply in.
 * @param {string} content Content of the message.
 * @param {string} username Shown username of the message.
 * @param {string} avatarURL Avatar used for the message.
 */
export function sendReply(channelID: string, content: (string | object), username?: string, avatarURL?: string): void {
   window.enmity.clyde.sendReply(channelID, content, username, avatarURL);
}
