import { FC } from 'react';

import { OrderTableItem } from '../OrderTableItem/OrderTableItem';

import s from './OrderTable.module.scss';

import { CartProduct } from '@/types/Cart.types';

interface Props {
  products: CartProduct[];
}

export const OrderTable: FC<Props> = ({ products }) => (
  <table className={s.table}>
    <thead className={s.thead}>
      <tr>
        <th className={s.th}>Image</th>
        <th className={s.th}>Product</th>
        <th className={s.th}>Quantity</th>
        <th className={s.th}>Price</th>
        <th className={s.th}>Total</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <OrderTableItem
          product={product}
          key={product.id}
        />
      ))}
    </tbody>
  </table>
);
