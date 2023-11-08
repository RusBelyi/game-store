import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';

import { KEY_QUERY_USER } from '@/config/consts';
import { login } from '@/services/apiAuth';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, error, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      queryClient.setQueryData([KEY_QUERY_USER], res);
      toast.success('Вы вошли в свой аккаунт');
      localStorage.setItem('isAuth', 'true');
      navigate(-1);
    },
    onError: () => toast.error('Не верный логин или пароль'),
  });

  return { login: mutate, error, isLoading };
};
