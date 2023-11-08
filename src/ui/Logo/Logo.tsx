import { FC } from 'react';

import { SiNintendogamecube } from 'react-icons/si';

import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { routes } from '@/App';
import { cn } from '@/utils/classNames';

interface LogoProps {
  className?: string;
  isLink?: boolean;
}

export const Logo: FC<LogoProps> = ({ className, isLink = true }) => {
  if (isLink) {
    return (
      <Link to={routes.store} className={cn(styles.logo, className)}>
        <SiNintendogamecube />
        <span>GameStore</span>
      </Link>
    );
  }

  return (
    <div className={cn(styles.logo, className)}>
      <SiNintendogamecube />
      <span>GameStore</span>
    </div>
  );
};
