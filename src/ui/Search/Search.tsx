import { FC, useEffect, useRef, useState } from 'react';

import { BiSearch } from 'react-icons/bi';

import styles from './styles.module.scss';

import { useDebounce } from '@/hooks/useDebounce';
import { useSearchParams } from '@/hooks/useSearchParams';
import { cn } from '@/utils/classNames';

interface SearchProps {
  className?: string;
  placeholder?: string;
  searchField: string;
  disabled?: boolean;
}

export const Search: FC<SearchProps> = ({
  className,
  placeholder,
  searchField,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const { setParam } = useSearchParams(searchField);
  const debounce = useDebounce();

  useEffect(() => {
    if (open) ref.current?.focus();
  }, [open]);

  return (
    <div className={cn(styles.wrap, disabled && styles.disabled)}>
      <input
        placeholder={open ? placeholder : ''}
        ref={ref}
        className={cn(styles.search, open && styles.open, className)}
        onChange={(e) => debounce(e.target.value, 500, setParam)}
      />
      <BiSearch onClick={() => setOpen((prev) => !prev)} className={styles.icon} />
    </div>
  );
};
