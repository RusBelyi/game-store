import { FC, ReactNode, useEffect } from 'react';

import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

import { routes } from '@/App';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  className?: string;
  children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuth = useAuth();

  useEffect(() => {
    return () => {
      if (!isAuth) toast.error('Авторизуйтесь для перехода на эту страницу');
    };
  }, []);

  if (!isAuth) {
    return <Navigate to={routes.login} />;
  }

  return children;
};
