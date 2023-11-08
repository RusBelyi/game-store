import { FC } from 'react';

import styles from './styles.module.scss';

import { Select } from '..';

import { useSearchParams } from '@/hooks/useSearchParams';
import { Option } from '@/types/Option';
import { cn } from '@/utils/classNames';

interface SortByProps {
  className?: string;
  options: Option[];
  disabled?: boolean;
}

export const SortBy: FC<SortByProps> = ({ className, options, disabled = false }) => {
  const { currentParam, setParam } = useSearchParams('sortBy');
  const sortBy = currentParam || options[0].value;

  return (
    <Select
      disabled={disabled}
      className={cn(styles.sort, className)}
      options={options}
      value={sortBy}
      onChange={setParam}
    />
  );
};
