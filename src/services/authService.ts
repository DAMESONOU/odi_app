import usersData from '../data/users.json';
import { User } from '../types/User';

export const authenticateUser = async (username: string, password: string): Promise<boolean> => {
  // Simuler un appel API avec un délai
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const users: User[] = usersData.users;
  const user = users.find(u => u.username === username && u.password === password);
  
  return !!user;
};

export const saveUserToStorage = (username: string): void => {
  localStorage.setItem('currentUser', username);
};

export const getUserFromStorage = (): string | null => {
  return localStorage.getItem('currentUser');
};

export const removeUserFromStorage = (): void => {
  localStorage.removeItem('currentUser');
};