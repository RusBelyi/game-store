import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { cn } from '@/utils/classNames';

type ThemeButton = 'primary' | 'outline' | 'outlineInverted' | 'green' | 'red';
type SizeButton = 's' | 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ThemeButton;
  size?: SizeButton;
  to?: string;
}

export const Button: FC<ButtonProps> = ({ className, children, theme, size, to, ...props }) => {
  if (to) {
    return (
      <Link
        className={cn(styles.button, theme && styles[theme], size && styles[size], className)}
        to={to}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(styles.button, theme && styles[theme], size && styles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
