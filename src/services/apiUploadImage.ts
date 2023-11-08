import { $api } from '@/config/api';

export const uploadImage = async (form: FormData) => {
  const { data } = await $api.post<{ url: string }>('/upload', form);

  return data;
};
