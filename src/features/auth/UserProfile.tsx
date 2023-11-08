import { FC, useEffect, useReducer, useRef } from 'react';

import styles from './styles.module.scss';

import { IUpdateUser } from './types/User';
import { UpdateUserForm } from './UpdateUserForm';

import { useUpdateUser } from './useUpdateUser';
import { useUploadImage } from './useUploadImage';
import { useUser } from './useUser';

import { SERVER_URL } from '@/config/api';
import { Button } from '@/ui';
import { cn } from '@/utils/classNames';
import { updateUserValidate } from '@/utils/updateUserValidate';

interface IState {
  oldUser: IUpdateUser;
  user: IUpdateUser;
  isDisabledForm: boolean;
  errors?: Partial<IUpdateUser>;
}

const initialState: IState = {
  isDisabledForm: true,
  oldUser: {
    email: '',
  },
  user: {
    email: '',
  },
};

type DefaultState = { type: 'initUser'; payload: IUpdateUser };
type ChangeUserName = { type: 'userName'; payload: string };
type ChangePassword = { type: 'password'; payload: string };
type ChangeAvatar = { type: 'avatar'; payload: string };
type Cancel = { type: 'cancel' };
type OffDisabled = { type: 'offDisabled' };
type OnDisabled = { type: 'onDisabled' };
type SetErrors = { type: 'setErrors'; payload?: Partial<IUpdateUser> };
type ResetErrors = { type: 'resetErrors' };
type Action =
  | DefaultState
  | ChangeUserName
  | ChangePassword
  | ChangeAvatar
  | Cancel
  | OffDisabled
  | OnDisabled
  | SetErrors
  | ResetErrors;

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'initUser':
      return { ...state, user: action.payload, oldUser: action.payload };
    case 'userName':
      return { ...state, user: { ...state.user, userName: action.payload } };
    case 'password':
      return { ...state, user: { ...state.user, password: action.payload } };
    case 'avatar':
      return { ...state, user: { ...state.user, avatarUrl: action.payload } };
    case 'cancel':
      return { ...state, user: state.oldUser, errors: undefined, isDisabledForm: true };
    case 'offDisabled':
      return { ...state, isDisabledForm: false };
    case 'onDisabled':
      return { ...state, isDisabledForm: true };
    case 'setErrors':
      return { ...state, errors: action.payload };
    case 'resetErrors':
      return { ...state, errors: undefined };
    default:
      return state;
  }
};

interface UserProfileProps {
  className?: string;
  isOpenModal?: boolean;
}

export const UserProfile: FC<UserProfileProps> = ({ className, isOpenModal }) => {
  const [userState, dispatch] = useReducer(reducer, initialState);
  const { user } = useUser();
  const { isUploadImage, uploadImage } = useUploadImage();
  const { updateUser, isUpdate } = useUpdateUser();
  const refFile = useRef<HTMLInputElement>(null);

  const date = new Date(user?.createdAt || '');
  const localTime = date.toLocaleString('ru');

  const handleSubmit = () => {
    const errors = updateUserValidate(userState.user);

    if (errors) {
      dispatch({ type: 'setErrors', payload: errors });
      return;
    }

    dispatch({ type: 'resetErrors' });

    updateUser(userState.user, {
      onSuccess: () => dispatch({ type: 'onDisabled' }),
    });
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

  useEffect(() => {
    if (user) {
      dispatch({
        type: 'initUser',
        payload: { email: user.email, userName: user.userName, avatarUrl: user.avatarUrl },
      });
    }
  }, [user]);

  useEffect(() => {
    if (!isOpenModal) dispatch({ type: 'cancel' });
  }, [isOpenModal]);

  if (!user) return null;

  return (
    <div className={cn(styles.userProfile, className)}>
      <div className={styles.changeAva}>
        {userState.user.avatarUrl ? (
          <img
            className={styles.ava}
            src={userState.user.avatarUrl}
            alt={userState.user.userName}
          />
        ) : (
          <span className={styles.ava}>{user.userName.slice(0, 1).toUpperCase()}</span>
        )}

        <Button
          disabled={isUploadImage || userState.isDisabledForm || isUpdate}
          onClick={() => refFile.current?.click()}
          theme='outlineInverted'
          size='s'
        >
          Изменить
        </Button>
        <input onChange={handleFile} ref={refFile} type='file' style={{ display: 'none' }} />
      </div>
      <div className={styles.data}>
        <div className={styles.btns}>
          {userState.isDisabledForm ? (
            <Button
              onClick={() => dispatch({ type: 'offDisabled' })}
              theme='outlineInverted'
              size='s'
            >
              Редактировать
            </Button>
          ) : (
            <>
              <Button
                disabled={isUpdate}
                onClick={() => dispatch({ type: 'cancel' })}
                theme='red'
                size='s'
              >
                Отмена
              </Button>
              <Button onClick={handleSubmit} disabled={isUpdate} theme='green' size='s'>
                Отправить
              </Button>
            </>
          )}
        </div>
        <UpdateUserForm
          isDisabled={userState.isDisabledForm}
          isUpdate={isUpdate}
          updatedUser={userState.user}
          updateErrors={userState.errors}
          changeUserName={(val) => dispatch({ type: 'userName', payload: val })}
          changePassword={(val) => dispatch({ type: 'password', payload: val })}
          setUpdateErrors={(errors) => dispatch({ type: 'setErrors', payload: errors })}
        />
        <span className={styles.createdUser}>Аккаунт создан {localTime}</span>
      </div>
    </div>
  );
};
