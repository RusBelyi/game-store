import { FC, useReducer, useRef } from 'react';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiChatDeleteLine } from 'react-icons/ri';

import styles from './styles.module.scss';

import { Register } from './types/Auth';
import { useRegister } from './useRegister';

import { useUploadImage } from './useUploadImage';

import { SERVER_URL } from '@/config/api';
import { Input, Button } from '@/ui';
import { cn } from '@/utils/classNames';
import { registerValidate } from '@/utils/registerValidate';

interface IState {
  registerData: Register;
  errors?: Partial<Register>;
}

const initialState: IState = {
  registerData: {
    email: '',
    password: '',
    userName: '',
  },
};

type UserName = { type: 'userName'; payload: string };
type Password = { type: 'password'; payload: string };
type Email = { type: 'email'; payload: string };
type Errors = { type: 'errors'; payload?: Partial<Register> };
type Avatar = { type: 'avatar'; payload?: string };
type Action = UserName | Password | Email | Errors | Avatar;

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'userName':
      return { ...state, registerData: { ...state.registerData, userName: action.payload } };
    case 'email':
      return { ...state, registerData: { ...state.registerData, email: action.payload } };
    case 'password':
      return { ...state, registerData: { ...state.registerData, password: action.payload } };
    case 'avatar':
      return { ...state, registerData: { ...state.registerData, avatarUrl: action.payload } };
    case 'errors':
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

interface RegisterFormProps {
  className?: string;
}

export const RegisterForm: FC<RegisterFormProps> = ({ className }) => {
  const [{ registerData, errors }, dispatch] = useReducer(reducer, initialState);
  const { register, isLoading } = useRegister();
  const { isUploadImage, uploadImage } = useUploadImage();
  const refFile = useRef<HTMLInputElement>(null);

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'userName', payload: e.target.value });

    if (!errors) return;

    const currentErrors = registerValidate({ ...registerData, userName: e.target.value });

    dispatch({ type: 'errors', payload: currentErrors });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'password', payload: e.target.value });

    if (!errors) return;

    const currentErrors = registerValidate({ ...registerData, password: e.target.value });

    dispatch({ type: 'errors', payload: currentErrors });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'email', payload: e.target.value });

    if (!errors) return;

    const currentErrors = registerValidate({ ...registerData, email: e.target.value });

    dispatch({ type: 'errors', payload: currentErrors });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    uploadImage(formData, {
      onSuccess: (res) => dispatch({ type: 'avatar', payload: `${SERVER_URL}/api${res.url}` }),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = registerValidate(registerData);

    if (errors) {
      dispatch({ type: 'errors', payload: errors });
      return;
    }

    register(registerData);
  };

  return (
    <form onSubmit={handleSubmit} className={cn(styles.form, className)}>
      <input onChange={handleFile} ref={refFile} type='file' style={{ display: 'none' }} />

      {registerData.avatarUrl ? (
        <div className={styles.addAva}>
          <RiChatDeleteLine
            onClick={() => dispatch({ type: 'avatar' })}
            className={styles.removeAva}
          />
          <img src={registerData.avatarUrl} alt='user avatar' />
        </div>
      ) : (
        <Button
          disabled={isUploadImage}
          onClick={(e) => {
            e.preventDefault();
            refFile.current?.click();
          }}
          className={styles.addAva}
        >
          <AiOutlineUserAdd />
        </Button>
      )}

      <Input
        error={errors?.userName}
        value={registerData.userName}
        onChange={handleUserName}
        placeholder='Ваше имя'
      />
      <Input
        error={errors?.email}
        value={registerData.email}
        onChange={handleEmail}
        placeholder='Ваш email'
        type='email'
      />
      <Input
        error={errors?.password}
        value={registerData.password}
        onChange={handlePassword}
        placeholder='Введите пароль'
        type='password'
      />
      <Button disabled={isLoading} theme='primary' size='m'>
        Зарегистрироваться
      </Button>
    </form>
  );
};
