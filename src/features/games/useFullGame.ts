import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { IGame } from './types/IGame';

import { KEY_QUERY_GAME_BY_ID } from '@/config/consts';
import { fetchGameById } from '@/services/apiGames';

export const useFullGame = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery<IGame, string>({
    queryKey: [KEY_QUERY_GAME_BY_ID],
    queryFn: () => fetchGameById(id || ''),
  });

  return { data, error, isLoading };
};
