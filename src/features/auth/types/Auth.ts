import { IUser } from './User';

export interface AuthServerResponse {
  token: string;
  userData: IUser;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  email: string;
  password: string;
  userName: string;
  avatarUrl?: string;
}
