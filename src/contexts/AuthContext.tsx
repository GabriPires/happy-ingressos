import { parseCookies, destroyCookie, setCookie } from 'nookies';
import { createContext, useContext, useState } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  handleLogin: () => void;
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

  const handleLogin = () => {
    setCookie(
      undefined,
      '@happy-ingressos:token',
      'auth-token-mucho-crazy-here',
      {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      },
    );
    setIsAuthenticated(isAuthenticated);
  };

  const handleLogout = () => {
    destroyCookie(undefined, '@happy-ingressos:token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
