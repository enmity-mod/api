import { EntityAuthor } from '../common';

export interface Theme {
   /**
    * Name of the theme.
    */
   name: string;

   /**
    * Description of the theme.
    */
   description?: string;

   /**
    * Color of the theme in settings.
    */
   color?: string;

   /**
    * Version of the theme.
    */
   version?: string;

   /**
    * Authors of the theme.
    */
   authors?: EntityAuthor[] | string[];

   /**
    * Colors for text and most background elements. Each item must have a color for dark mode and a color for light mode, in that order.
    */
   theme_color_map: Record<string, [string, string]>;

   /**
    * Colors used throughout Discord.
    */
   colours: Record<string, string>;

   /**
    * Unsafe colors. Themes the grey bar under the keyboard (for now).
    */
   unsafe_colors?: Record<string, string>;
}
