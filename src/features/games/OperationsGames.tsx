import { FC } from 'react';

import styles from './styles.module.scss';

import { useGames } from './useGames';

import { filterPlatforms, sortBy } from '@/config/consts';
import { Filter, Search, SortBy } from '@/ui';
import { cn } from '@/utils/classNames';

interface OperationsGamesProps {
  className?: string;
}

export const OperationsGames: FC<OperationsGamesProps> = ({ className }) => {
  const { error, isLoading } = useGames();

  return (
    <div className={cn(styles.operationsGames, className)}>
      <Search disabled={isLoading || !!error} placeholder='Поиск в магазине' searchField='title' />
      <Filter disabled={isLoading || !!error} filterField='platform' options={filterPlatforms} />
      <SortBy disabled={isLoading || !!error} options={sortBy} />
    </div>
  );
};
