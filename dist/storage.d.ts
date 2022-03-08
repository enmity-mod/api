declare function getItem(name: string): Promise<string | null>;
declare function setItem(name: string, value: string): Promise<string>;
declare function removeItem(name: string): Promise<void>;
export { getItem, setItem, removeItem };
