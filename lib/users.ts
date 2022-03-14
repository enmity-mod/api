import { Profile, User } from './common';

/**
 * Fetch current user.
 * @returns {Promise<User>}
 */
export async function fetchCurrentUser(): Promise<User> {
  return new Promise((resolve, reject) => {
    window.enmity.users.fetchCurrentUser().then((user: any) => {
      resolve(user);
    }).catch(reject);
  });
}

/**
 * Fetch a profile.
 * @param {string} userID
 * @returns {Promise<Profile>}
 */
export async function fetchProfile(userID: string): Promise<Profile> {
  return new Promise((resolve, reject) => {
    window.enmity.users.fetchProfile(userID).then((user: any) => {
      resolve(user);
    }).catch(reject);
  });
}

/**
 * Get an user.
 * @param {string} userID
 * @returns {Promise<User>}
 */
export async function getUser(userID: string): Promise<User> {
  return new Promise((resolve, reject) => {
    window.enmity.users.getUser(userID).then((user: any) => {
      resolve(user);
    }).catch(reject);
  });
}
