import React from 'react';

import styles from './Orders.module.scss';
import { OrderItem } from './OrderItem/OrderItem';

import { Order } from '@/types/Order.types';

interface OrdersProps {
  orders: Order[];
}

const Orders: React.FC<OrdersProps> = ({ orders }) => (
  <div className={styles.orders}>
    <h2 className={styles.title}>Your Orders:</h2>
    {orders.map((order) => (
      <OrderItem
        key={order.id}
        order={order}
      />
    ))}
  </div>
);

export default Orders;
