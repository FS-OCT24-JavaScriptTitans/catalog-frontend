import cn from 'classnames';
import { shallowEqual } from 'react-redux';

import Container from '../Container/Container';
import EmpthyCart from '../../UI/EmptyCart/EmptyCart';

import s from './Cart.module.scss';
import { Summary } from './Summary/Summary';
import { CartList } from './CartList/CartList';

import { useAppSelector } from '@/redux/hooks';
import { selectCart } from '@/redux/selectors';

export const Cart = () => {
  const cart = useAppSelector(selectCart, shallowEqual);

  return (
    <Container>
      {cart.length ?
        <>
          <h2 className={cn('title', s.sectionTitle)}>Cart</h2>{' '}
          <div className={s.wrapper}>
            <CartList cart={cart} />
            <Summary cart={cart} />
          </div>
        </>
      : <EmpthyCart />}
    </Container>
  );
};
