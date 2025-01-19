import React from 'react';
import { useTranslation } from 'react-i18next';

import { OrderItem } from './OrderItem/OrderItem';

import { Order } from '@/types/Order.types';
import { Container } from '@/UI/Container/Container';

interface OrdersProps {
  orders: Order[];
}

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  const { t } = useTranslation();

  return (
    <Container
      title={t('orders.title')}
      mt="32px"
      titlePB="24px"
    >
      {orders.map((order) => (
        <OrderItem
          order={order}
          key={order.id}
        />
      ))}
    </Container>
  );
};

export default Orders;
