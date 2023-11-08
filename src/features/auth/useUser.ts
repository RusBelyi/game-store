import { useQuery } from '@tanstack/react-query';

import { AuthServerResponse } from './types/Auth';

import { KEY_QUERY_USER } from '@/config/consts';
import { fetchMe } from '@/services/apiAuth';

export const useUser = () => {
  const { data, isLoading, error } = useQuery<AuthServerResponse, string>({
    queryKey: [KEY_QUERY_USER],
    queryFn: fetchMe,
    onSuccess: () => {
      localStorage.setItem('isAuth', 'true');
    },
    onError: () => {
      localStorage.removeItem('isAuth');
    },
  });

  return { user: data?.userData, isLoading, error };
};
