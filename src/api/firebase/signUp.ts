import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';
import { getUser } from './db/getUser';
import addUserToDb from './db/addUserToDb';

import { ResponseUser, User } from '@/types/User.type';

type TSignUp = (data: User) => Promise<ResponseUser | string | null>;

export const signUp: TSignUp = async ({ name, email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;

    await addUserToDb(user, 'local', name);

    const newUser = await getUser(user.uid);

    return newUser;
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
