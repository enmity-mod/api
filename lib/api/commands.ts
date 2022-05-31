import { Message } from '../common';

/**
 * Generic interface that implements `name` and `displayName`.
 */
export interface HasName {
   /**
    * Internal name.
    */
   name: string;

   /**
    * Displayed name.
    */
   displayName?: string;
}

/**
 * Generic interface that implements `description` and `displayDescription`.
 */
export interface HasDescription {
   /**
    * Internal description.
    */
   description: string;

   /**
    * Displayed description.
    */
   displayDescription?: string;
}

/**
 * Represents a Discord command section.
 */
export interface Section {
   /**
    * ID of the section.
    */
   id: string;

   /**
    * Type of the section.
    */
   type: ApplicationCommandSectionType;

   /**
    * Name of the section.
    */
   name: string;
}

/**
 * Represents a Discord command.
 */
export interface Command extends HasName, HasDescription {
   /**
    * ID of the command.
    */
   id?: string;

   /**
    * ID of the application the command belongs to.
    *
    * Defaults to enmity's for organization purposes.
    */
   applicationId?: string;

   /**
    * Type of the command.
    * @see {@link ApplicationCommandType}
    */
   type?: ApplicationCommandType;

   /**
    * Input type of the command.
    * @see {@link ApplicationCommandInputType}
    */
   inputType?: ApplicationCommandInputType;

   /**
    * List of options for the command.
    * @see {@link CommandOption}
    */
   options?: CommandOption[];

   /**
    * Function to check whether the command can be executed.
    * @param {Message} message
    * @returns {boolean}
    */
   predicate?: (message: Message) => boolean;

   /**
    * Function to be executed when the command is run.
    * @param {Argument[]} args List of arguments according to the command's options.
    * @param {Message} message Message associated with the executed command.
    */
   execute: (args: Argument[], message?: Message) => void;
}

/**
 * Argument for a Discord command.
 */
export interface Argument {
   /**
    * Name of the argument.
    *
    * Will match the option's name.
    * @see {@link CommandOption}
    */
   name: string;

   /**
    * Value of the argument.
    */
   value: string;

   /**
    * Type of the argument.
    *
    * Will match the options's type.
    * @see {@link ApplicationCommandOptionType}
    */
   type: ApplicationCommandOptionType;

   /**
    * Whether the argument is focused.
    *
    * Not sure if this value is actually useful.
    */
   focused?: boolean;
}

/**
 * Option for a command.
 */
export interface CommandOption extends HasName, HasDescription {
   /**
    * Type of the option.
    * @see {@link ApplicationCommandOptionType}
    */
   type: ApplicationCommandOptionType;

   /**
    * Whether the option is required.
    */
   required?: boolean;

   /**
    * Choices of the option.
    * @see {@link CommandChoice}
    */
   choices?: CommandChoice[];
}

/**
 * Choice for an option.
 */
export interface CommandChoice extends HasName {
   /**
    * Value of the choice.
    */
   value: string;
}

/**
 * Type of a command section.
 */
export enum ApplicationCommandSectionType {
   BuiltIn = 0,
   Guild = 1,
   DM = 2,
}

/**
 * Type of a command.
 */
export enum ApplicationCommandType {
   Chat = 1,
   User = 2,
   Message = 3,
}

/**
 * Input type of a command.
 */
export enum ApplicationCommandInputType {
   BuiltIn = 0,
   BuiltInText = 1,
   BuiltInIntegration = 2,
   Bot = 3,
   Placeholder = 4,
}

/**
 * Permission type of a command.
 */
export enum ApplicationCommandPermissionType {
   Role = 1,
   User = 2,
}

/**
 * Option type for an option.
 */
export enum ApplicationCommandOptionType {
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
   Attachment = 11,
}

/**
 * Type for an interaction.
 */
export enum InteractionTypes {
   ApplicationCommand = 2,
   MessageComponent = 3,
}

/**
 * Register a new command in Discord.
 * @param {string} caller Name of the caller.
 * @param {Command[]} commands Commands to register.
 */
export function registerCommands(caller: string, commands: Command[]): void {
   window.enmity.commands.registerCommands(caller, commands);
}

/**
 * Remove all commands registered by a caller.
 * @param {string} caller Name of the caller.
 */
export function unregisterCommands(caller: string): void {
   window.enmity.commands.unregisterCommands(caller);
}
