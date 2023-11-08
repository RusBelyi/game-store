import { FC } from 'react';

import styles from './styles.module.scss';

import { MainNav } from '..';

import { cn } from '@/utils/classNames';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn(styles.sidebar, className)}>
      <MainNav />
    </div>
  );
};
