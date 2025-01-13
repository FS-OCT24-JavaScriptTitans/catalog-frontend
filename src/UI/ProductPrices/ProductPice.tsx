import { FC } from 'react';
import cn from 'classnames';

import s from './ProductPrice.module.scss';

interface Props {
  price: number;
  isOldpice?: boolean;
}
export const ProductPrice: FC<Props> = ({ price, isOldpice }) =>
  isOldpice ? <h3 className={cn(s.priceOld)}>${price}</h3> : <h2 className={cn(s.price)}>${price}</h2>;
