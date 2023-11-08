import { FC } from 'react';

import styles from './styles.module.scss';

import { IUpdateUser } from './types/User';

import {  Input } from '@/ui';
import { updateUserValidate } from '@/utils/updateUserValidate';

interface UpdateUserFormProps {
  isDisabled: boolean;
  isUpdate: boolean;
  updatedUser: IUpdateUser;
  updateErrors?: Partial<IUpdateUser>;
  changeUserName: (val: string) => void;
  changePassword: (val: string) => void;
  setUpdateErrors: (err?: Partial<IUpdateUser>) => void;
}

export const UpdateUserForm: FC<UpdateUserFormProps> = ({
  isDisabled,
  isUpdate,
  updatedUser,
  updateErrors,
  changeUserName,
  changePassword,
  setUpdateErrors,
}) => {
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeUserName(e.target.value);

    if (!updateErrors) return;

    const errors = updateUserValidate({
      userName: e.target.value,
      email: updatedUser.email,
      password: updatedUser.password,
    });

    setUpdateErrors(errors);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    changePassword(e.target.value);

    if (!updateErrors) return;

    const errors = updateUserValidate({
      userName: updatedUser.userName,
      email: updatedUser.email,
      password: e.target.value,
    });

    setUpdateErrors(errors);
  };

  return (
    <form className={styles.updateUserForm}>
      <Input value={updatedUser.email} disabled />
      <Input
        error={updateErrors?.userName}
        onChange={handleUserName}
        value={updatedUser.userName || ''}
        placeholder='Ваше имя'
        disabled={isDisabled || isUpdate}
      />
      <Input
        error={updateErrors?.password}
        onChange={handlePassword}
        value={updatedUser.password || ''}
        placeholder='Новый пароль'
        type='password'
        disabled={isDisabled || isUpdate}
      />
    </form>
  );
};
