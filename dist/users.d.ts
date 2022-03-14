import { Profile, User } from './common';
export declare function fetchCurrentUser(): Promise<User>;
export declare function fetchProfile(userID: string): Promise<Profile>;
export declare function getUser(userID: string): Promise<User>;
