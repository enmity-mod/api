// Discord types

/**
 * Represents a Discord channel.
 */
export interface Channel {
   id: string;
   guild_id: string;
   type: number;
   name: string;
   position: number;
   topic?: string;
   recipients: string[];
   rawRecipients: User[];
   permissionOverwrites: Record<string, ChannelPermission>;
   bitrate: number;
   videoQualityMode?: number;
   rtcRegion?: string;
   userLimit: number;
   ownerId: null;
   icon?: string;
   banner?: string;
   application_id?: string;
   nicks: Object;
   nsfw: boolean;
   parent_id: string;
   memberListId?: string;
   rateLimitPerUser: number;
   defaultAutoArchiveDuration?: number;
   originChannelId?: string;
   lastMessageId: string;
   lastPinTimestamp: string;
   messageCount?: number;
   memberCount?: number;
   memberIdsPreview?: string[];
   member?: ThreadMember;
   threadMetadata?: ThreadMetadata;
}

/**
 * Represents a Discord permission.
 */
export interface Permission {
   parts: number[];
   str: string;
}

/**
 * Represents a Discord channel permission.
 */
export interface ChannelPermission {
   id: string;
   type: number;
   allow: Permission;
   deny: Permission;
}

/**
 * Represents a Discord message.
 */
export interface Message {
   guild: Guild;
   channel: Channel;
}

/**
 * Represents Discord thread metadata.
 */
export interface ThreadMetadata {
   archived: boolean;
   autoArchiveDuration: number;
   archiveTimestamp: string;
   locked: boolean;
   invitable?: boolean;
   createTimestamp?: string;
}

/**
 * Represents a Discord thread member.
 */
export interface ThreadMember {
   id?: string;
   user_id?: string;
   joinTimestamp: string;
   flags: number;
   muted?: boolean;
   muteConfig?: null;
}

/**
 * Represents a Discord guild.
 */
export interface Guild {
   id: string;
   name: string;
   description?: string;
   ownerId: string;
   icon?: string;
   splash?: string;
   banner?: string;
   features: Set<string>;
   preferredLocale: string;
   roles: Record<string, Role>;
   afkChannelId: string;
   afkTimeout: number;
   systemChannelId: string;
   verificationLevel: number;
   region: string;
   joinedAt: string;
   defaultMessageNotifications: number;
   mfaLevel: number;
   application_id: string;
   explicitContentFilter: number;
   vanityURLCode: string;
   premiumTier: number;
   premiumSubscriberCount: number;
   premiumProgressBarEnabled: boolean;
   systemChannelFlags: number;
   discoverySplash?: string;
   rulesChannelId?: string;
   publicUpdatesChannelId?: string;
   maxVideoChannelUsers: number;
   maxMembers: number;
   nsfwLevel: number;
   applicationCommandCounts: number;
   hubType: number;
}

/**
 * Represents a Discord role.
 */
export interface Role {
   id: string;
   name: string;
   permissions: Permission;
   mentionable: boolean;
   position: number;
   originalPosition: number;
   color: number;
   colorString: string;
   hoist: boolean;
   managed: boolean;
   tags?: RoleTags;
   icon?: string;
   unicodeEmoji?: string;
}

/**
 * Represents a Discord user.
 */
export interface User {
   id: string;
   discriminator: string;
   username: string;
   bio: string;
   avatar: string;
   avatarDecoration?: null;
   banner: string;
   accentColor?: null | string;
   publicFlags: number;
   flags: number;
   email?: string;
   verified?: boolean;
   bot?: boolean;
   system?: boolean;
   mfaEnabled?: boolean;
   mobile?: boolean;
   desktop?: boolean;
   premiumType?: number;
   purchasedFlags?: number;
   premiumUsageFlags?: number;
   phone?: string;
   nsfwAllowed?: boolean;
   guildMemberAvatars?: Record<string, string>;
   pronouns?: string;
}

/**
 * Represents a Discord account.
 */
export interface Account {
   type: string;
   id: string;
   name: string;
   verified: boolean;
}

/**
 * Represents a Discord profile.
 */
export interface Profile {
   user: User;
   connected_accounts: Account[];
   premium_since: string;
   premium_guild_since: string;
   mutual_guilds: Guild[];
}

/**
 * Represents the tags of a Discord role.
 */
export interface RoleTags {
   bot_id?: string;
   integration_id?: string;
   premium_subscriber?: null;
}


// enmity-api types

/**
 * Represents an Enmity plugin or theme author.
 */
export interface EntityAuthor {
   /**
    * Name of the author.
    */
   name: string;

   /**
    * User ID of the author.
    */
   id?: string;
}

/**
 * Type alias for a module.
 *
 * Can be anything.
 */
export type Module = any;

interface API extends Record<string, any> {
   modules: typeof import('./metro');
   themer: typeof import('./managers/themes');
   patcher: typeof import('./patcher');
   version: string;
   plugins: typeof import('./managers/plugins');
   clyde: typeof import('./api/clyde');
   commands: typeof import('./api/commands');
   settings: typeof import('./api/settings');
   components: typeof import('./components');
   native: typeof import('./api/native');
}

interface Window {
   enmity: API;
}

declare global {
   const window: Window;
}
