import ProductCardSceleton from '../ProductCartSceleton/ProductCartSceleton';

import s from './ProductListScaleton.module.scss';

export const ProductListSceleton = () => (
  <span className={s.container}>
    <ProductCardSceleton />
    <ProductCardSceleton />
    <ProductCardSceleton />
    <ProductCardSceleton />
  </span>
);
