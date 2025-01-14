import { FC } from 'react';

import s from './OrderProduct.module.scss';

import { CartProduct } from '@/types/Cart.types';

interface Props {
  product: CartProduct;
}

export const OrderProduct: FC<Props> = ({ product }) => {
  const { priceDiscount, priceRegular, images, name, quantity } = product;
  const price = priceDiscount || priceRegular;
  const totalPrice = price * quantity;

  return (
    <article
      key={product.id}
      className={s.product}
    >
      <div className={s.imageContainer}>
        <img
          src={images[0]}
          alt={name}
        />
      </div>
      <div className={s.details}>
        <h4 className={s.name}>{name}</h4>
        <p className={s.detail}>
          Quantity: <span>{quantity}</span>{' '}
        </p>
        <p className={s.detail}>
          Price: <span>${price}</span>{' '}
        </p>

        <p className={s.detail}>
          Total price: <span>${totalPrice}</span>{' '}
        </p>
      </div>
    </article>
  );
};
