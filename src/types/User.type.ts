export interface User {
  name: string;
  email: string;
  password: string;
}

export interface ResponseUser {
  uid: string;
  name: string;
  email: string;
  authProvider: string;
  accessToken: string;
  refreshToken: string;
  expirationTime: number;
}
