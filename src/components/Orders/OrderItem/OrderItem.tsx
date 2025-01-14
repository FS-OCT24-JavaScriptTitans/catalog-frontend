import { FC } from 'react';

import { OrderProduct } from '../OrderProduct/OrderProduct';

import s from './OrderItem.module.scss';

import { Order } from '@/types/Order.types';

interface Props {
  order: Order;
}

export const OrderItem: FC<Props> = ({ order }) => (
  <article
    key={order.id}
    className={s.item}
  >
    <h4 className={s.id}>
      Order ID: <span> {order.id}</span>
    </h4>

    <h3 className={s.productsTitle}>Products:</h3>
    <div className={s.products}>
      {order.products.map((product) => (
        <OrderProduct
          key={product.id}
          product={product}
        />
      ))}
    </div>

    <h4 className={s.total}>Total order price : ${order.totalPrice} </h4>
  </article>
);
