import cn from 'classnames';
import { FC } from 'react';

import s from './Summary.module.scss';

import { Button } from '@/UI/Button/Button';
import { CartSummary } from '@/types/Cart.types';

interface Props {
  summary: CartSummary;
}

export const Summary: FC<Props> = ({ summary }) => (
  <article className={s.container}>
    <div>
      <h2 className={cn('title', s.price)}>${summary.totalPrice}</h2>
      <h4 className={(cn('primary-text'), s.amount)}>Total for {summary.totalQuantity} items</h4>
      <div className={cn('line', s.line)}></div>
    </div>

    <Button
      onClick={() => {}}
      label="Checkout"
    />
  </article>
);
