import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import addUserToDb from './db/addUserToDb';
import { getUser } from './db/getUser';

import { ResponseUser } from '@/types/User.type';

const googleProvider = new GoogleAuthProvider();

type TSignInWithGoogle = () => Promise<string | ResponseUser | null>;

export const signInWithGoogle: TSignInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;

    const isUser = await getUser(user.uid);

    if (!isUser) await addUserToDb(user, 'google');

    const newUser = await getUser(user.uid);

    return newUser;
  } catch (error: unknown) {
    return getFirebaseErrorMessage(error);
  }
};
