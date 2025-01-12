import { FC } from 'react';

import s from './ProductPrice.module.scss';
import { ProductPrice } from './ProductPice';

interface Props {
  prices: { priceRegular: number; priceDiscount: number };
}

export const ProductPrices: FC<Props> = ({ prices }) => (
  <div className={s.container}>
    {prices.priceDiscount ?
      <>
        <ProductPrice
          price={prices.priceRegular}
          isOldpice={true}
        />
        <ProductPrice price={prices.priceDiscount} />
      </>
    : <ProductPrice price={prices.priceRegular} />}
  </div>
);
