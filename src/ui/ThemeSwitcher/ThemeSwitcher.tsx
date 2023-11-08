import { FC } from 'react';

import { BsFillSunFill } from 'react-icons/bs';
import { MdModeNight } from 'react-icons/md';

import styles from './styles.module.scss';

import { Button } from '..';

import { useTheme } from '@/context/Theme';
import { cn } from '@/utils/classNames';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className={cn(styles.themeSwitcher, className)}>
      {theme === 'dark' ? <BsFillSunFill /> : <MdModeNight />}
    </Button>
  );
};
