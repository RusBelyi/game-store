import { FC } from 'react';

import styles from './styles.module.scss';

import { useUser } from './useUser';

import { Button } from '@/ui';
import { cn } from '@/utils/classNames';

interface UserAvatarProps {
  className?: string;
  onClick?: () => void;
}

export const UserAvatar: FC<UserAvatarProps> = ({ className, onClick }) => {
  const { user, isLoading } = useUser();

  if (isLoading || !user) return null;

  return (
    <Button onClick={onClick} className={cn(styles.userAvatar, className)}>
      {user.avatarUrl ? (
        <img className={styles.imgAva} src={user.avatarUrl} alt={user.userName} />
      ) : (
        <span className={styles.imgAva}>{user.userName.slice(0, 1).toUpperCase()}</span>
      )}
      <span className={styles.userName}>{user.userName}</span>
    </Button>
  );
};
