import { Message } from '../common';
export interface HasName {
    name: string;
    displayName: string;
}
export interface HasDescription {
    description: string;
    displayDescription: string;
}
export interface Section {
    id: string;
    type: ApplicationCommandSectionType;
    name: string;
}
export interface Command extends HasName, HasDescription {
    id: string;
    applicationId: string;
    type: ApplicationCommandType;
    inputType: ApplicationCommandInputType;
    options?: CommandOption[];
    predicate?: (message: Message) => boolean;
    execute: (args: Argument[], message?: Message) => void;
}
export interface Argument {
    name: string;
    value: string;
    type: ApplicationCommandOptionType;
    focused?: boolean;
}
export interface CommandOption extends HasName, HasDescription {
    type: ApplicationCommandOptionType;
    required?: boolean;
    choices?: CommandChoice[];
}
export interface CommandChoice extends HasName {
    value: string;
}
export declare enum ApplicationCommandSectionType {
    BuiltIn = 0,
    Guild = 1,
    DM = 2
}
export declare enum ApplicationCommandType {
    Chat = 1,
    User = 2,
    Message = 3
}
export declare enum ApplicationCommandInputType {
    BuiltIn = 0,
    BuiltInText = 1,
    BuiltInIntegration = 2,
    Bot = 3,
    Placeholder = 4
}
export declare enum ApplicationCommandPermissionType {
    Role = 1,
    User = 2
}
export declare enum ApplicationCommandOptionType {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionnable = 9,
    Number = 10,
    Attachment = 11
}
export declare enum InteractionTypes {
    ApplicationCommand = 2,
    MessageComponent = 3
}
export declare const EnmitySectionID = "enmity";
export declare function registerCommands(caller: string, commands: Command[]): void;
export declare function unregisterCommands(caller: string): void;
