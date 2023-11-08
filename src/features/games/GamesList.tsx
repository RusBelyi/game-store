import { FC } from 'react';

import { GamesItem } from './GamesItem';
import styles from './styles.module.scss';

import { useGames } from './useGames';

import { Error, Loader } from '@/ui';
import { cn } from '@/utils/classNames';

interface GamesListProps {
  className?: string;
}

export const GamesList: FC<GamesListProps> = ({ className }) => {
  const { games, error, isLoading } = useGames();

  if (isLoading) return <Loader center />;
  if (error) return <Error msg='Не удалось загрузить список игр' />;
  if (!games?.length) return <Error msg='Игра не найдена' reload={false} />;

  return (
    <ul className={cn(styles.gamesList, className)}>
      {games?.map((game) => (
        <GamesItem game={game} key={game._id} />
      ))}
    </ul>
  );
};
