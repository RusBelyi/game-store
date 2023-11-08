import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';

import { routes } from '@/App';
import { KEY_QUERY_USER } from '@/config/consts';
import { logout } from '@/services/apiAuth';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: [KEY_QUERY_USER] });
      navigate(routes.store);
      localStorage.removeItem('isAuth');
    },
  });

  return { logout: mutate };
};
