import { useQuery } from '@tanstack/react-query';

import { useSearchParams } from 'react-router-dom';

import { ServerResponseGames } from './types/IGame';

import { KEY_QUERY_GAMES } from '@/config/consts';
import { fetchGames } from '@/services/apiGames';

export const useGames = () => {
  const [searchParams] = useSearchParams();

  const operations = {
    platform: searchParams.get('platform'),
    sortBy: searchParams.get('sortBy'),
    title: searchParams.get('title'),
    page: searchParams.get('page'),
  };

  const { data, error, isLoading } = useQuery<ServerResponseGames, Error>({
    queryKey: [KEY_QUERY_GAMES, operations],
    queryFn: () => fetchGames(operations),
  });
  return { games: data?.games, countItems: data?.countItems, isLoading, error: error?.message };
};
