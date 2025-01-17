import React from 'react';

import { ProductCard } from '../ProductCard/ProductCard';

import s from './ProductsList.module.scss';

import { Product } from '@/types/Product.type';

type Props = {
  products: Product[];
};

export const ProductsList: React.FC<Props> = ({ products }) => (
  <ul className={s.wrapper}>
    {products?.map((product) => (
      <li
        className={s.product_card}
        key={product.id}
      >
        <ProductCard product={product} />
      </li>
    ))}
  </ul>
);
