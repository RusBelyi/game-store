import { FC } from 'react';

import { Navigate } from 'react-router-dom';

import styles from './styles.module.scss';

import { routes } from '@/App';
import { Login } from '@/features';
import { useAuth } from '@/hooks/useAuth';

interface LoginPageProps {
  className?: string;
}

export const LoginPage: FC<LoginPageProps> = () => {
  const isAuth = useAuth();

  if (isAuth) return <Navigate to={routes.store} />;

  return (
    <div className={styles.loginPage}>
      <Login />
    </div>
  );
};
