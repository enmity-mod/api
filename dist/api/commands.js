export var ApplicationCommandSectionType;
(function (ApplicationCommandSectionType) {
    ApplicationCommandSectionType[ApplicationCommandSectionType["BuiltIn"] = 0] = "BuiltIn";
    ApplicationCommandSectionType[ApplicationCommandSectionType["Guild"] = 1] = "Guild";
    ApplicationCommandSectionType[ApplicationCommandSectionType["DM"] = 2] = "DM";
})(ApplicationCommandSectionType || (ApplicationCommandSectionType = {}));
export var ApplicationCommandType;
(function (ApplicationCommandType) {
    ApplicationCommandType[ApplicationCommandType["Chat"] = 1] = "Chat";
    ApplicationCommandType[ApplicationCommandType["User"] = 2] = "User";
    ApplicationCommandType[ApplicationCommandType["Message"] = 3] = "Message";
})(ApplicationCommandType || (ApplicationCommandType = {}));
export var ApplicationCommandInputType;
(function (ApplicationCommandInputType) {
    ApplicationCommandInputType[ApplicationCommandInputType["BuiltIn"] = 0] = "BuiltIn";
    ApplicationCommandInputType[ApplicationCommandInputType["BuiltInText"] = 1] = "BuiltInText";
    ApplicationCommandInputType[ApplicationCommandInputType["BuiltInIntegration"] = 2] = "BuiltInIntegration";
    ApplicationCommandInputType[ApplicationCommandInputType["Bot"] = 3] = "Bot";
    ApplicationCommandInputType[ApplicationCommandInputType["Placeholder"] = 4] = "Placeholder";
})(ApplicationCommandInputType || (ApplicationCommandInputType = {}));
export var ApplicationCommandPermissionType;
(function (ApplicationCommandPermissionType) {
    ApplicationCommandPermissionType[ApplicationCommandPermissionType["Role"] = 1] = "Role";
    ApplicationCommandPermissionType[ApplicationCommandPermissionType["User"] = 2] = "User";
})(ApplicationCommandPermissionType || (ApplicationCommandPermissionType = {}));
export var ApplicationCommandOptionType;
(function (ApplicationCommandOptionType) {
    ApplicationCommandOptionType[ApplicationCommandOptionType["SubCommand"] = 1] = "SubCommand";
    ApplicationCommandOptionType[ApplicationCommandOptionType["SubCommandGroup"] = 2] = "SubCommandGroup";
    ApplicationCommandOptionType[ApplicationCommandOptionType["String"] = 3] = "String";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Integer"] = 4] = "Integer";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Boolean"] = 5] = "Boolean";
    ApplicationCommandOptionType[ApplicationCommandOptionType["User"] = 6] = "User";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Channel"] = 7] = "Channel";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Role"] = 8] = "Role";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Mentionnable"] = 9] = "Mentionnable";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Number"] = 10] = "Number";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Attachment"] = 11] = "Attachment";
})(ApplicationCommandOptionType || (ApplicationCommandOptionType = {}));
export var InteractionTypes;
(function (InteractionTypes) {
    InteractionTypes[InteractionTypes["ApplicationCommand"] = 2] = "ApplicationCommand";
    InteractionTypes[InteractionTypes["MessageComponent"] = 3] = "MessageComponent";
})(InteractionTypes || (InteractionTypes = {}));
export const EnmitySectionID = 'enmity';
export function registerCommands(caller, commands) {
    window.enmity.commands.registerCommands(caller, commands);
}
export function unregisterCommands(caller) {
    window.enmity.commands.unregisterCommands(caller);
}
