import cn from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { shallowEqual } from 'react-redux';

import s from './Summary.module.scss';

import { Button } from '@/UI/Button/Button';
import { CartProduct } from '@/types/Cart.types';
import { calculateCartSummary } from '@/utils/cart/calculateCartSummary';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useOrder } from '@/hooks/useOrder';
import notification from '@/utils/notification';
import { PATH } from '@/constants/path';
import { clearCart } from '@/redux/slices/cart/carrt.slice';
import { ProductPrices } from '@/UI/ProductPrices/ProductPrices';
import { ProductPrice } from '@/UI/ProductPrices/ProductPice';
import { selectUser } from '@/redux/selectors';

interface Props {
  cart: CartProduct[];
}

export const Summary: FC<Props> = ({ cart }) => {
  const user = useAppSelector(selectUser, shallowEqual);
  const dispatch = useAppDispatch();
  const { setOrder } = useOrder();
  const navigate = useNavigate();

  const { totalDiscountPrice, totalQuantity, totalPrice } = calculateCartSummary(cart);

  const handleSetOrder = () => () => {
    if (!user) {
      notification('error', 'To place an order need to sign in');

      return;
    }

    setOrder(cart, user?.uid);
    notification('success', 'An order was created');
    dispatch(clearCart());

    navigate(PATH.HOME);
  };

  const priceDiff = totalPrice - totalDiscountPrice;

  return (
    <article className={s.container}>
      <div>
        {priceDiff ?
          <ProductPrices prices={{ priceDiscount: totalDiscountPrice, priceRegular: totalPrice }} />
        : <ProductPrice price={totalPrice} />}

        <h4 className={(cn('primary-text'), s.amount)}>Total for {totalQuantity} items</h4>
        <div className={cn('line', s.line)}></div>
      </div>

      <Button
        onClick={handleSetOrder()}
        label="Checkout"
      />
    </article>
  );
};
