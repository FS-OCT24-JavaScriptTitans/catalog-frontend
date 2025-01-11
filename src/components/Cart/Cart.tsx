import cn from 'classnames';

import Container from '../Container/Container';

import s from './Cart.module.scss';
import { Summary } from './Summary/Summary';
import { CartList } from './CartList/CartList';

import { useAppSelector } from '@/redux/hooks';

export const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <Container>
      <h2 className={cn('title', s.sectionTitle)}>Cart</h2>{' '}
      <div className={s.wrapper}>
        <CartList cart={cart} />

        <Summary cart={cart} />
      </div>
    </Container>
  );
};
