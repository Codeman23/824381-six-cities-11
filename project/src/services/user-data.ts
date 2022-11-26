import { User } from '../types/user';

const USER_DATA_KEY_NAME = 'six-cities-user-data';

const getUserData = (): User => {
  const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY_NAME) as string) as User;
  return userData ?? '';
};

const saveUserData = (userData: User): void => {
  localStorage.setItem(USER_DATA_KEY_NAME, JSON.stringify(userData));
};

const dropUserData = (): void => {
  localStorage.removeItem(USER_DATA_KEY_NAME);
};

export { getUserData, saveUserData, dropUserData };
