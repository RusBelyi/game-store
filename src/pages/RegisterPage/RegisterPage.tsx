import { FC } from 'react';

import { Navigate } from 'react-router-dom';

import styles from './styles.module.scss';

import { routes } from '@/App';
import { Register } from '@/features';
import { useAuth } from '@/hooks/useAuth';

interface RegisterPageProps {
  className?: string;
}

export const RegisterPage: FC<RegisterPageProps> = () => {
  const isAuth = useAuth();

  if (isAuth) return <Navigate to={routes.store} />;
  return (
    <div className={styles.registerPage}>
      <Register />
    </div>
  );
};
