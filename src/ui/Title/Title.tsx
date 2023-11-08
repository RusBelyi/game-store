import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

import { cn } from '@/utils/classNames';

interface TitleProps {
  className?: string;
  children?: ReactNode;
  tag?: 'h1' | 'h2' | 'h3';
  size?: 'm' | 'l' | 'xl';
}

export const Title: FC<TitleProps> = ({ className, children, tag = 'h1', size = 'l' }) => {
  const Tag = tag;
  return <Tag className={cn(styles.title, styles[size], className)}>{children}</Tag>;
};
