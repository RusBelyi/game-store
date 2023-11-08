import { Register } from '@/features/auth/types/Auth';

export const registerValidate = (data: Register) => {
  const errors: Partial<Register> = {};

  if (!data.email) errors.email = 'Введите ваш email';
  if (data.password.length < 5) errors.password = 'Пароль должен содержать минимум 5 символов';

  if (data.userName.length < 3) errors.userName = 'Имя должно содержать минимум 3 символа';

  return Object.keys(errors).length > 0 ? errors : undefined;
};
