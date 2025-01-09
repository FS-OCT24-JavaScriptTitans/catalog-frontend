import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from './firebaseConfig';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

import { FetchUser } from '@/types/User.type';

type TSignInWithToken = (refreshToken: string) => Promise<FetchUser | string | null>;

export const signInWithToken: TSignInWithToken = async (refreshToken) => {
  try {
    const q = query(collection(db, 'users'), where('refreshToken', '==', refreshToken));

    const docs = await getDocs(q);

    return docs.docs.length !== 0 ? (docs.docs[0].data() as FetchUser) : null;
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
