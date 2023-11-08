import { FC } from 'react';

import styles from './styles.module.scss';

import { Logo, ThemeSwitcher } from '..';

import { LoginOrLogout, UserAvatarModal } from '@/features';
import { cn } from '@/utils/classNames';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <div className={cn(styles.header, className)}>
      <Logo />
      <div className={styles.right}>
        <UserAvatarModal className={styles.userAvatar} />
        <ThemeSwitcher />
        <LoginOrLogout />
      </div>
    </div>
  );
};
