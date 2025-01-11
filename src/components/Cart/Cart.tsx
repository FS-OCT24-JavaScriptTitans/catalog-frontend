import cn from 'classnames';

import Container from '../Container/Container';

import s from './Cart.module.scss';
import { CartItem } from './CartItem/CartItem';
import { CartPrice } from './CartPrice/CartPrice';

export const Cart = () => {
  const a = 5;

  console.log(a);

  return (
    <Container>
      <h2 className={cn('title', s.sectionTitle)}>Cart</h2>{' '}
      <div className={s.wrapper}>
        <ul className={s.list}>
          <CartItem />
          <CartItem />
        </ul>
        <CartPrice />
      </div>
    </Container>
  );
};
