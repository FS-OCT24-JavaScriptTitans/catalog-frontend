import { FC } from 'react';
import cn from 'classnames';

import s from './OrderTableItem.module.scss';

import { CartProduct } from '@/types/Cart.types';
import { CustomLink } from '@/UI/Link/Link';
import { getFormatedPrice, getProductPrice, getTotalProductsPrice } from '@/utils/price';

interface Props {
  product: CartProduct;
}

export const OrderTableItem: FC<Props> = ({ product }) => (
  <tr
    key={product.id}
    className={s.tr}
  >
    <td className={cn(s.td, s.tdImage)}>
      <img
        src={product.images[0]}
        alt={product.name}
        className={s.image}
      />
    </td>
    <td className={s.td}>
      <CustomLink
        label={product.name}
        path={`${product.category}/${product.id}`}
      />{' '}
    </td>
    <td className={s.td}>{product.quantity}</td>
    <td className={s.td}>${getFormatedPrice(getProductPrice(product))}</td>
    <td className={s.td}>${getFormatedPrice(getTotalProductsPrice(product))}</td>
  </tr>
);
