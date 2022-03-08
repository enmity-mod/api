import { Profile, User } from "./common";
declare function fetchCurrentUser(): Promise<User>;
declare function fetchProfile(userID: string): Promise<Profile>;
declare function getUser(userID: string): Promise<User>;
export { fetchCurrentUser, fetchProfile, getUser };
