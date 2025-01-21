import { FC } from 'react';

import { CartItem } from '../CartItem/CartItem';

import s from './CartList.module.scss';

import { CartProduct } from '@/types/Cart.types';

interface Props {
  cart: CartProduct[];
}

export const CartList: FC<Props> = ({ cart }) => (
  <ul
    className={s.list}
    data-aos="fade-right"
    data-aos-duration="1500"
  >
    {cart.map((product) => (
      <li
        className={s.listItem}
        key={product.id}
      >
        <CartItem product={product} />
      </li>
    ))}
  </ul>
);
