import { FC, useState } from 'react';

import styles from './styles.module.scss';

import { Login } from './types/Auth';
import { useLogin } from './useLogin';

import { Button, Input } from '@/ui';
import { cn } from '@/utils/classNames';
import { loginValidate } from '@/utils/loginValidate';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState<Partial<Login>>();
  const { login, isLoading } = useLogin();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!loginErrors) return;

    const errors = loginValidate({ email: e.target.value, password });
    setLoginErrors(errors);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!loginErrors) return;

    const errors = loginValidate({ email, password: e.target.value });
    setLoginErrors(errors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = loginValidate({ email, password });
    if (errors) {
      setLoginErrors(errors);
      return;
    }

    login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className={cn(styles.form, className)}>
      <Input
        error={loginErrors?.email}
        placeholder='Введите email'
        type='email'
        value={email}
        onChange={handleEmail}
      />
      <Input
        error={loginErrors?.password}
        placeholder='Введите пароль'
        type='password'
        value={password}
        onChange={handlePassword}
      />
      <Button disabled={isLoading} theme='primary' size='m'>
        Войти
      </Button>
    </form>
  );
};
