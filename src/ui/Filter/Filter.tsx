import { FC } from 'react';

import styles from './styles.module.scss';

import { useSearchParams } from '@/hooks/useSearchParams';
import { Option } from '@/types/Option';
import { cn } from '@/utils/classNames';

interface FilterProps {
  filterField: string;
  options: Option[];
  className?: string;
  disabled?: boolean;
}

export const Filter: FC<FilterProps> = ({ filterField, options, className, disabled = false }) => {
  const { currentParam, setParam } = useSearchParams(filterField);
  const currentFilter = currentParam || options[0].value;

  return (
    <div className={cn(styles.filter, disabled && styles.disabled, className)}>
      {options.map((el, i) => (
        <button
          onClick={() => setParam(el.value)}
          className={cn(styles.btn, currentFilter === el.value && styles.active)}
          disabled={currentFilter === el.value}
          key={i}
        >
          {el.label}
        </button>
      ))}
    </div>
  );
};
