import { useState, useEffect } from 'react';
import { authenticateUser, saveUserToStorage, getUserFromStorage, removeUserFromStorage } from '../services/authService';

export const useAuth = () => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifier si un utilisateur est déjà connecté
    const storedUser = getUserFromStorage();
    if (storedUser) {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    const isValid = await authenticateUser(username, password);
    
    if (isValid) {
      setUser(username);
      saveUserToStorage(username);
      return true;
    }
    
    return false;
  };

  const logout = (): void => {
    setUser(null);
    removeUserFromStorage();
  };

  return {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading
  };
};