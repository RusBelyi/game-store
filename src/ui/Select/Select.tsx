import { FC } from 'react';

import styles from './styles.module.scss';

import { cn } from '@/utils/classNames';

interface SelectProps {
  className?: string;
  options: { value: string; label: string }[];
  onChange: (val: string) => void;
  value: string;
  disabled?: boolean;
}

export const Select: FC<SelectProps> = ({
  className,
  options,
  onChange,
  value,
  disabled = false,
}) => {
  return (
    <select
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className={cn(styles.select, className)}
    >
      {options.map((el) => (
        <option key={el.label} value={el.value}>
          {el.label}
        </option>
      ))}
    </select>
  );
};
