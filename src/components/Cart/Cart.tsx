import cn from 'classnames';

import Container from '../Container/Container';

import s from './Cart.module.scss';
import { CartItem } from './CartItem/CartItem';
import { Summary } from './Summary/Summary';

import { useAppSelector } from '@/redux/hooks';
import { calculateCartSummary } from '@/utils/cart';

export const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  const cartSummary = calculateCartSummary(cart);

  return (
    <Container>
      <h2 className={cn('title', s.sectionTitle)}>Cart</h2>{' '}
      <div className={s.wrapper}>
        <ul className={s.list}>
          {cart.map((product) => (
            <li
              className={s.listItem}
              key={product.id}
            >
              <CartItem product={product} />
            </li>
          ))}
        </ul>
        <Summary summary={cartSummary} />
      </div>
    </Container>
  );
};
