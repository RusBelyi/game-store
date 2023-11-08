import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

import { Title } from '..';

import { cn } from '@/utils/classNames';

interface EmptyProps {
  className?: string;
  children?: ReactNode;
}

export const Empty: FC<EmptyProps> = ({ className, children }) => {
  return (
    <div className={cn(styles.empty, className)}>
      <Title size='xl'>{children}</Title>
    </div>
  );
};
