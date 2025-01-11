import cn from 'classnames';
import { FC } from 'react';

import s from './CartItem.module.scss';

import { IconButton } from '@/UI/IconButton/IconButton';
import { CartProduct } from '@/types/Cart.types';
import Plus from '@/assets//Plus.svg?react';
import Minus from '@/assets//Minus.svg?react';
import Close from '@/assets/Close.svg?react';

interface Props {
  product: CartProduct;
}

export const CartItem: FC<Props> = ({ product }) => (
  <article className={s.cartItem}>
    <div className={s.description}>
      <button className={s.close}>
        <Close />
      </button>
      <div className={s.imgContainer}>
        <img
          className={s.img}
          src={product.images[0]}
          alt={product.name}
        />
      </div>
      <h3 className={cn('primary-text', s.title)}>{product.name}</h3>
    </div>

    <div className={s.controls}>
      <div className={s.controlsContainer}>
        <IconButton onClick={() => {}}>
          <Minus />
        </IconButton>

        <div className={s.quantity}>{product.quantity}</div>

        <IconButton onClick={() => {}}>
          <Plus />
        </IconButton>
      </div>

      <h2 className={s.price}>${product.priceRegular}</h2>
    </div>
  </article>
);
