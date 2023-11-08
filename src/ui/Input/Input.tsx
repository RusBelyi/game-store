import { FC, InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

import { cn } from '@/utils/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

export const Input: FC<InputProps> = ({ className, disabled, error, ...props }) => {
  return (
    <div className={styles.wrap}>
      {error && <span className={styles.error}>{error}</span>}
      <input className={cn(styles.input, className)} disabled={disabled} {...props} />
    </div>
  );
};
