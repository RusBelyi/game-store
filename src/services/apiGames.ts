import { $api } from '@/config/api';
import { ServerResponseGames } from '@/features/games/types/IGame';

export const fetchGames = async (params: { platform: string | null; sortBy: string | null }) => {
  try {
    const { data } = await $api.get<ServerResponseGames>('/games', {
      params: { ...params, sortBy: params.sortBy === null ? 'rating-desc' : params.sortBy },
    });
    return data;
  } catch (error) {
    throw new Error('Произошла ошибка при получении игр');
  }
};

export const fetchGameById = async (id: string) => {
  try {
    const { data } = await $api.get('/games/' + id);
    return data;
  } catch (error) {
    throw new Error('Не удалось получить данные об игре');
  }
};
