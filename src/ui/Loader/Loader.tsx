import { FC } from 'react';

import styles from './styles.module.scss';

import { cn } from '@/utils/classNames';

interface LoaderProps {
  className?: string;
  center?: boolean;
}

export const Loader: FC<LoaderProps> = ({ className, center = false }) => {
  return (
    <div className={cn(styles.ldsRoller, center && styles.center, className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
