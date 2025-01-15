import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../../firebaseConfig';
import { getFirebaseErrorMessage } from '../../getFirebaseErrorMessage';

import { Order } from '@/types/Order.types';

export const getOrders = async (userEmail: string): Promise<Order[] | string> => {
  try {
    const q = query(collection(db, 'orders'), where('email', '==', userEmail));

    const querySnapshot = await getDocs(q);

    const orders: Order[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Order[];

    return orders;
  } catch (error) {
    return getFirebaseErrorMessage(error);
  }
};
