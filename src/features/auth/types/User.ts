export interface IUser {
  _id: string;
  userName: string;
  email: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateUser {
  userName?: string;
  password?: string;
  email: string;
  avatarUrl?: string;
}
