import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import { getUser } from './db/getUser';

import { FetchUser, User } from '@/types/User.type';
import { LOGIN_ERROR } from '@/constants/errors';

type TSignIn = (data: Pick<User, 'email' | 'password'>) => Promise<FetchUser | string | null>;

export const signIn: TSignIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    const { user } = res;

    const newUser = await getUser(user.uid);

    if (newUser) {
      return newUser;
    }

    return LOGIN_ERROR;
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
