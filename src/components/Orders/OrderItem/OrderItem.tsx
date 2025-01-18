import React from 'react';
import cn from 'classnames';

import { OrderTable } from '../OrderTable/OrderTable';

import s from './OrderItem.module.scss';

import { Order } from '@/types/Order.types';
import { getFormatedPrice } from '@/utils/price';

interface Props {
  order: Order;
}

export const OrderItem: React.FC<Props> = ({ order }) => (
  <div
    key={order.id}
    className={s.container}
  >
    <h4 className={s.title}>
      Order № <span className={cn('button-text', s.orderId)}>{order.id}</span>
    </h4>
    <p>
      <strong>Customer:</strong> {order.firstName} {order.lastName}
    </p>
    <p>
      <strong>Address:</strong> {order.streetAddress}, {order.city}, {order.state}, {order.postcode}
    </p>
    <p>
      <strong>Contact:</strong> {order.phone} | {order.email}
    </p>
    <div className={s.tableContainer}>
      <OrderTable products={order.products} />
    </div>
    <h3 className={s.totalPrice}>
      <span> Order total:</span>
      <span> ${getFormatedPrice(order.totalPrice)}</span>
    </h3>
  </div>
);
