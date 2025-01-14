import { addDoc, collection } from 'firebase/firestore';

import { db } from '../../firebaseConfig';
import { getFirebaseErrorMessage } from '../../getFirebaseErrorMessage';

import { Order } from '@/types/Order.types';

export const postOrder = async (order: Omit<Order, 'id'>): Promise<Order | string> => {
  try {
    const newOrder = await addDoc(collection(db, 'orders'), {
      ...order,
    });

    return { id: newOrder.id, ...order };
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
