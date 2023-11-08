import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

import { Header, Sidebar } from '..';

import { cn } from '@/utils/classNames';

interface AppLayoutProps {
  className?: string;
}

export const AppLayout: FC<AppLayoutProps> = ({ className }) => {
  return (
    <div className={cn(styles.appLayout, className)}>
      <Header className={styles.header} />
      <Sidebar />

      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
