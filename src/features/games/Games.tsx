import { FC, useMemo } from 'react';

import { GamesList } from './GamesList';
import { OperationsGames } from './OperationsGames';
import styles from './styles.module.scss';

import { useGames } from './useGames';

import { useSearchParams } from '@/hooks/useSearchParams';
import { Pagination, Row, Title } from '@/ui';
import { cn } from '@/utils/classNames';

interface GamesProps {
  className?: string;
}

export const Games: FC<GamesProps> = ({ className }) => {
  const { countItems } = useGames();
  const { currentParam: sortBy } = useSearchParams('sortBy');
  const { currentParam: filter } = useSearchParams('platform');
  const { currentParam: title } = useSearchParams('title');

  const resetPagination = useMemo(() => ({ sortBy, filter, title }), [sortBy, filter, title]);

  return (
    <div className={cn(styles.games, className)}>
      <Row className={styles.row}>
        <Title size='xl'>Все игры</Title>
        <OperationsGames />
      </Row>

      <GamesList />

      <Pagination
        className={styles.pagination}
        count={countItems || 1}
        pageSize={8}
        resetPagination={resetPagination}
      />
    </div>
  );
};
