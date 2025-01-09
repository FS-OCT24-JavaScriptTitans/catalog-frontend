import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

import { ResponseUser } from '@/types/User.type';

type TSignInWithToken = (refreshToken: string) => Promise<ResponseUser | string | null>;

export const signInWithToken: TSignInWithToken = async (refreshToken) => {
  try {
    const q = query(collection(db, 'users'), where('refreshToken', '==', refreshToken));

    const docs = await getDocs(q);

    return docs.docs.length !== 0 ? (docs.docs[0].data() as ResponseUser) : null;
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
