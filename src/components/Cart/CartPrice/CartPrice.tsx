import cn from 'classnames';

import s from './CartPrice.module.scss';

import { Button } from '@/UI/Button/Button';

export const CartPrice = () => (
  <article className={s.container}>
    <div>
      <h2 className={cn('title', s.price)}>$2657</h2>
      <h4 className={(cn('primary-text'), s.amount)}>Total for 3 items</h4>
      <div className={cn('line', s.line)}></div>
    </div>

    <Button
      onClick={() => {}}
      label="Checkout"
    />
  </article>
);
