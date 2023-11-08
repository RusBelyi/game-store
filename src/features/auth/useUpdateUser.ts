import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';

import { KEY_QUERY_USER } from '@/config/consts';
import { updateUser } from '@/services/apiAuth';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEY_QUERY_USER] });
      toast.success('Ваши данные были успешно изменены');
    },
    onError: () => toast.error('Произошла ошибка при изменении данных'),
  });

  return { updateUser: mutate, isUpdate: isLoading };
};
