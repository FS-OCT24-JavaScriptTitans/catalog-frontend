import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebaseConfig';

import { FetchUser } from '@/types/User.type';

type TGetUser = (uid: string) => Promise<FetchUser | null>;

export const getUser: TGetUser = async (uid) => {
  const q = query(collection(db, 'users'), where('uid', '==', uid));

  const docs = await getDocs(q);

  return docs.docs.length !== 0 ? (docs.docs[0].data() as FetchUser) : null;
};
