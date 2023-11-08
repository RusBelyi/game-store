import { FC } from 'react';

import { AuthTemplate } from './AuthTemplate';
import { LoginForm } from './LoginForm';

import { routes } from '@/App';

interface LoginProps {
  className?: string;
}

export const Login: FC<LoginProps> = () => {
  return (
    <AuthTemplate
      to={routes.register}
      title='Вход'
      label='Если у вас нет аккаунта'
      link='зарегистрируйтесь'
    >
      <LoginForm />
    </AuthTemplate>
  );
};
