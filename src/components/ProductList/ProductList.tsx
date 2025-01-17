import { FC } from 'react';

import s from './ProductList.module.scss';

import { ProductCard } from '@/UI/ProductCard/ProductCard';
import { Product } from '@/types/Product.type';

interface Props {
  products: Product[];
}

export const ProductList: FC<Props> = ({ products }) => (
  <ul className={s.list}>
    {products.map((product) => (
      <li key={product.id}>
        <ProductCard product={product} />
      </li>
    ))}
  </ul>
);
