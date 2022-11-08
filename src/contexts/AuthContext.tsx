import { useRouter } from 'next/router';
import { parseCookies, destroyCookie, setCookie } from 'nookies';
import { createContext, useContext, useReducer, useState } from 'react';
import { LOGIN_ROUTE } from '../constants/routes';

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

  const { push } = useRouter();

  const handleLogin = () => {
    setCookie(null, '@happy-ingressos:token', 'auth-token-mucho-crazy-here', {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    destroyCookie(null, '@happy-ingressos:token');
    setIsAuthenticated(false);
    push(LOGIN_ROUTE);
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
