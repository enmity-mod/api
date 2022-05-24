import { Author } from "./common";
export interface Theme {
    name: string;
    description?: string;
    color?: string;
    version?: string;
    authors?: Author[] | string[];
    theme_color_map: Record<string, [string, string]>;
    colours: Record<string, string>;
    unsafe_colors?: Record<string, string>;
}
