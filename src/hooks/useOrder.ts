import useLocaLStorage from './useLocaLStorage';

import { getISODate } from '@/utils/date/getDate';
import { CartProduct } from '@/types/Cart.types';
import { Order } from '@/types/Order.types';

export const useOrder = () => {
  const { setItem, getItem } = useLocaLStorage('orders');

  const getOrders = () => getItem();

  const getOrder = (id: string) => {
    const orders = getOrders() as Order[];

    return orders ? orders.filter((order) => order.id === id) || null : null;
  };

  const getOrdersByUserId = (userId: string) => {
    const orders = getOrders() as Order[];

    return orders ? orders.filter((order) => order.userId === userId) || null : null;
  };

  const setOrder = (products: CartProduct[], userId: string) => {
    const order = {
      id: self.crypto.randomUUID(),
      userId,
      products,
      date: getISODate(),
    };

    setItem(order);
  };

  return { getOrders, setOrder, getOrder, getOrdersByUserId };
};
