import cn from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './Summary.module.scss';

import { Button } from '@/UI/Button/Button';
import { CartProduct } from '@/types/Cart.types';
import { calculateCartSummary } from '@/utils/cart/calculateCartSummary';
import { useAppSelector } from '@/redux/hooks';
import { useOrder } from '@/hooks/useOrder';
import notification from '@/utils/notification';
import { PATH } from '@/constants/path';

interface Props {
  cart: CartProduct[];
}

export const Summary: FC<Props> = ({ cart }) => {
  const user = useAppSelector((state) => state.user.user);
  const { setOrder } = useOrder();
  const navigate = useNavigate();

  const summary = calculateCartSummary(cart);

  const handleSetOrder = () => () => {
    if (!user) {
      notification('error', 'To place an order need to sign in');

      return;
    }

    setOrder(cart, user?.uid);
    notification('success', 'An order was created');

    navigate(PATH.HOME);
  };

  return (
    <article className={s.container}>
      <div>
        <h2 className={cn('title', s.price)}>${summary.totalPrice}</h2>
        <h4 className={(cn('primary-text'), s.amount)}>Total for {summary.totalQuantity} items</h4>
        <div className={cn('line', s.line)}></div>
      </div>

      <Button
        onClick={handleSetOrder()}
        label="Checkout"
      />
    </article>
  );
};
