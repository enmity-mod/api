import { Profile, User } from './common';

/**
 * Fetch current user.
 * @returns {Promise<User>}
 */
export async function fetchCurrentUser(): Promise<User> {
  return await window.enmity.users.fetchCurrentUser();
}

/**
 * Fetch a profile.
 * @param {string} userID
 * @returns {Promise<Profile>}
 */
export async function fetchProfile(userID: string): Promise<Profile> {
  return await window.enmity.users.fetchProfile(userID);
}

/**
 * Get an user.
 * @param {string} userID
 * @returns {Promise<User>}
 */
export async function getUser(userID: string): Promise<User> {
  return await window.enmity.users.getUser(userID);
}
