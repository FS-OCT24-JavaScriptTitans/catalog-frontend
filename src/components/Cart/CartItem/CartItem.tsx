import cn from 'classnames';
import { FC } from 'react';

import s from './CartItem.module.scss';

import { IconButton } from '@/UI/IconButton/IconButton';
import { CartProduct } from '@/types/Cart.types';
import Plus from '@/assets//Plus.svg?react';
import Minus from '@/assets//Minus.svg?react';
import Close from '@/assets/Close.svg?react';
import { useAppDispatch } from '@/redux/hooks';
import { increaseQuantity, removeQuantity } from '@/redux/slices/cart/carrt.slice';

interface Props {
  product: CartProduct;
}

export const CartItem: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleIncrease = (id: string) => () => dispatch(increaseQuantity({ id }));
  const handleRemove = (id: string) => () => dispatch(removeQuantity({ id }));

  return (
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
          <IconButton onClick={handleRemove(product.id)}>
            <Minus />
          </IconButton>

          <div className={s.quantity}>{product.quantity}</div>

          <IconButton onClick={handleIncrease(product.id)}>
            <Plus />
          </IconButton>
        </div>

        <h2 className={s.price}>${product.priceRegular}</h2>
      </div>
    </article>
  );
};
