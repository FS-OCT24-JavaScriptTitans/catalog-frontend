import cn from 'classnames';
import { shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Container from '../Container/Container';

import s from './Cart.module.scss';
import { Summary } from './Summary/Summary';
import { CartList } from './CartList/CartList';

import { useAppSelector } from '@/redux/hooks';
import { selectCart } from '@/redux/selectors';
import EmptyContainer from '@/UI/EmpttContainer/EmptyContainer';

export const Cart = () => {
  const cart = useAppSelector(selectCart, shallowEqual);
  const { t } = useTranslation();

  return (
    <Container>
      {cart.length ?
        <>
          <h2 className={cn('title', s.sectionTitle)}>{t('cartPage.cart')}</h2>{' '}
          <div className={s.wrapper}>
            <CartList cart={cart} />
            <Summary cart={cart} />
          </div>
        </>
      : <EmptyContainer
          title="The Cart is empty"
          pathToImg="/img/cart-is-empty.png"
          alt="empty-order"
        />
      }
    </Container>
  );
};
