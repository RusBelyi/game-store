import { Login } from '@/features/auth/types/Auth';

export const loginValidate = (data: Login) => {
  const errors: Partial<Login> = {};

  if (!data.email) errors.email = 'Введите ваш email';
  if (!data.password) errors.password = 'Введите ваш пароль';

  return Object.keys(errors).length > 0 ? errors : undefined;
};
