import { shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';

import s from './Cart.module.scss';
import { Summary } from './Summary/Summary';
import { CartList } from './CartList/CartList';

import { useAppSelector } from '@/redux/hooks';
import { selectCart } from '@/redux/selectors';
import EmptyContainer from '@/UI/EmptyContainer/EmptyContainer';
import { Container } from '@/UI/Container/Container';

export const Cart = () => {
  const cart = useAppSelector(selectCart, shallowEqual);
  const { t } = useTranslation();

  return cart.length ?
      <Container
        title={t('cartPage.cart')}
        titlePB="32px"
      >
        <div className={s.wrapper}>
          <CartList cart={cart} />
          <Summary cart={cart} />
        </div>
      </Container>
    : <EmptyContainer
        title="The Cart is empty"
        pathToImg="/img/empty-cart.webp"
        alt="empty-order"
      />;
};
