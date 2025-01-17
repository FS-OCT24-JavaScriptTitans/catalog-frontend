import React from 'react';

import { OrderItem } from './OrderItem/OrderItem';

import { Order } from '@/types/Order.types';
import { Container } from '@/UI/Container/Container';

interface OrdersProps {
  orders: Order[];
}

const Orders: React.FC<OrdersProps> = ({ orders }) => (
  <Container
    title="Orders:"
    mt="32px"
  >
    {orders.map((order) => (
      <OrderItem
        order={order}
        key={order.id}
      />
    ))}
  </Container>
);

export default Orders;
