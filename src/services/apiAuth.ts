import { $api } from '@/config/api';
import { AuthServerResponse, Login, Register } from '@/features/auth/types/Auth';
import { IUpdateUser, IUser } from '@/features/auth/types/User';

export const login = async (loginData: Login) => {
  const { data } = await $api.post<AuthServerResponse>('/auth/login', loginData);
  localStorage.setItem('token', data.token);
  return data;
};

export const register = async (registerData: Register) => {
  const { data } = await $api.post<AuthServerResponse>('/auth/register', registerData);
  localStorage.setItem('token', data.token);
  return data;
};

export const fetchMe = async () => {
  const { data } = await $api.get<AuthServerResponse>('/auth/me');
  return data;
};

export const logout = async () => {
  localStorage.removeItem('token');
};

export const updateUser = async (userData: IUpdateUser) => {
  const { data } = await $api.put<IUser>('/auth/update', userData);
  return data;
};
