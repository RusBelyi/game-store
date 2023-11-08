import { IUpdateUser } from '@/features/auth/types/User';

export const updateUserValidate = (data: IUpdateUser) => {
  const errors: Partial<IUpdateUser> = {};

  if (data.password && data.password.length < 5 && data.password.length !== 0) {
    errors.password = 'Введите минимум 5 символов';
  }

  if (typeof data.userName === 'string' && data.userName.length < 3) {
    errors.userName = 'Введите минимум 3 символа';
  }

  return Object.keys(errors).length > 0 ? errors : undefined;
};
