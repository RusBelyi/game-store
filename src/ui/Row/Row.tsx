import { FC, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

import { cn } from '@/utils/classNames';

interface RowProps extends PropsWithChildren {
  className?: string;
}

export const Row: FC<RowProps> = ({ className, children }) => {
  return <div className={cn(styles.row, className)}>{children}</div>;
};
