import { parseCookies, destroyCookie } from 'nookies';
import { createContext, useContext, useState } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  handleSetIsAuthenticated: (isAuthenticated: boolean) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProvider {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProvider) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const cookies = parseCookies();

    const { '@happy-ingressos:token': tokenCookie } = cookies;

    if (tokenCookie) {
      return true;
    }

    return false;
  });

  const handleSetIsAuthenticated = (isAuthenticated: boolean) => {
    setIsAuthenticated(isAuthenticated);
  };

  const handleLogout = () => {
    destroyCookie(undefined, '@happy-ingressos:token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleSetIsAuthenticated, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
