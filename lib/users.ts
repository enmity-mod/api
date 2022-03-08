import { Profile, User } from "./common";

/**
 * Fetch currently logged in user
 */
async function fetchCurrentUser(): Promise<User> {
  return new Promise((resolve, reject) => {
    window.enmity.users.fetchCurrentUser().then((user: any) => {
      resolve(user);
    }).catch(reject);
  });
}

/**
 * Fetch a profile 
 */
async function fetchProfile(userID: string): Promise<Profile> {
  return new Promise((resolve, reject) => {
    window.enmity.users.fetchProfile(userID).then((user: any) => {
      resolve(user);
    }).catch(reject);
  });
}

/**
 * Get an user
 */
async function getUser(userID: string): Promise<User> {
  return new Promise((resolve, reject) => {
    window.enmity.users.getUser(userID).then((user: any) => {
      resolve(user);
    }).catch(reject);
  });
}

export {
  fetchCurrentUser,
  fetchProfile,

  getUser
}