import { FC, useEffect, useRef } from 'react';

import { IoIosArrowForward } from 'react-icons/io';

import styles from './styles.module.scss';

import { useSearchParams } from '@/hooks/useSearchParams';
import { cn } from '@/utils/classNames';

interface PaginationProps {
  className?: string;
  count: number;
  pageSize: number;
  resetPagination?: Record<string, string | null>;
}

export const Pagination: FC<PaginationProps> = ({
  className,
  count,
  pageSize,
  resetPagination,
}) => {
  const countButtons = Math.ceil(count / pageSize);
  const { currentParam, setParam } = useSearchParams('page');
  const currentPage = Number(currentParam || 1);
  const isFirstRender = useRef(true);

  const clickNext = () => {
    setParam((currentPage + 1).toString());
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clickNumber = (i: number) => {
    setParam((i + 1).toString());
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setParam('1');
  }, [resetPagination]);

  if (countButtons <= 1) return null;

  return (
    <div className={cn(styles.pagination, className)}>
      {Array.from({ length: countButtons }, (_, i) => (
        <button
          key={i}
          onClick={() => clickNumber(i)}
          className={cn(styles.btn, styles.numberPage, i + 1 === currentPage && styles.active)}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={clickNext}
        className={cn(styles.btn, styles.next, currentPage === countButtons && styles.disabled)}
      >
        <span>дальше</span>
        <IoIosArrowForward />
      </button>
    </div>
  );
};
