import { FC } from 'react';

import s from './CartItem.module.scss';

import { IconButton } from '@/UI/IconButton/IconButton';
import { CartProduct } from '@/types/Cart.types';
import Plus from '@/assets//Plus.svg?react';
import Minus from '@/assets//Minus.svg?react';
import Close from '@/assets/Close.svg?react';
import { useAppDispatch } from '@/redux/hooks';
import { increaseQuantity, removeQuantity } from '@/redux/slices/cart/carrt.slice';
import { ProductPrices } from '@/UI/ProductPrices/ProductPrices';
import { CustomLink } from '@/UI/Link/Link';

interface Props {
  product: CartProduct;
}

export const CartItem: FC<Props> = ({ product }) => {
  const { priceDiscount, priceRegular, quantity, name, images, id } = product;
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
            src={images[0]}
            alt={name}
          />
        </div>

        <CustomLink
          label={name}
          path={`/${product.category}/${product.id}`}
        />
      </div>{' '}
      <div className={s.controls}>
        {' '}
        <div className={s.controlsContainer}>
          <IconButton
            onClick={handleRemove(id)}
            hasBorder
          >
            <Minus />
          </IconButton>

          <div className={s.quantity}>{quantity}</div>

          <IconButton
            onClick={handleIncrease(id)}
            hasBorder
          >
            <Plus />
          </IconButton>
        </div>
        <ProductPrices prices={{ priceDiscount, priceRegular }} />
      </div>
    </article>
  );
};
