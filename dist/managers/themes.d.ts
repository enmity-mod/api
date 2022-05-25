import { EntityAuthor } from '../common';
export interface Theme {
    name: string;
    description?: string;
    color?: string;
    version?: string;
    authors?: EntityAuthor[] | string[];
    theme_color_map: Record<string, [string, string]>;
    colours: Record<string, string>;
    unsafe_colors?: Record<string, string>;
}
