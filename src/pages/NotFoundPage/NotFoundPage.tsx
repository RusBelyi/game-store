import { FC } from 'react';

import styles from './styles.module.scss';

import { cn } from '@/utils/classNames';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  return (
    <div className={cn(styles.notFoundPage, className)}>
      <h1>Страница не существует</h1>
    </div>
  );
};
