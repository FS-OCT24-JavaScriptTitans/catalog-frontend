import { FC } from 'react';

import { Order } from '@/types/Order.types';

interface Props {
  orders: Order[];
}

export const Orders: FC<Props> = ({ orders }) => {
  console.log(orders);

  return <div>Orders</div>;
};
