import { FC } from 'react';

import { AuthTemplate } from './AuthTemplate';
import { RegisterForm } from './RegisterForm';

import { routes } from '@/App';

interface RegisterProps {
  className?: string;
}

export const Register: FC<RegisterProps> = () => {
  return (
    <AuthTemplate
      to={routes.login}
      title='Регистрация'
      label='У вас уже есть аккаунт?'
      link='Войти'
    >
      <RegisterForm />
    </AuthTemplate>
  );
};
