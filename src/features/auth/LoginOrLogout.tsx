import { FC } from 'react';

import { BiLogIn } from 'react-icons/bi';
import { TbLogout } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { useLogout } from './useLogout';

import { routes } from '@/App';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/ui';

interface LoginOrLogoutProps {
  className?: string;
}

export const LoginOrLogout: FC<LoginOrLogoutProps> = () => {
  const isAuth = useAuth();
  const { logout } = useLogout();

  return (
    <>
      {isAuth ? (
        <Button onClick={() => logout()} className={styles.authButton}>
          <TbLogout />
        </Button>
      ) : (
        <Link to={routes.login} className={styles.authButton}>
          <BiLogIn />
        </Link>
      )}
    </>
  );
};
