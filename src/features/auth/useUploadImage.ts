import { useMutation } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';

import { uploadImage } from '@/services/apiUploadImage';

export const useUploadImage = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: uploadImage,
    onError: () => toast.error('Не удалось загрузить картинку'),
  });

  return {
    uploadImage: mutate,
    isUploadImage: isLoading,
  };
};
