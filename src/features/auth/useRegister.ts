import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';

import { routes } from '@/App';
import { KEY_QUERY_USER } from '@/config/consts';
import { register } from '@/services/apiAuth';

export const useRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, error, isLoading } = useMutation({
    mutationFn: register,
    onSuccess: (res) => {
      queryClient.setQueryData([KEY_QUERY_USER], res);
      toast.success('Регистрация прошла успешно');
      localStorage.setItem('isAuth', 'true');
      navigate(routes.store);
    },
    onError: () => toast.error('Ошибка при регистрации'),
  });

  return { register: mutate, error, isLoading };
};
