import cn from 'classnames';
import { FC, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';

import s from './Summary.module.scss';

import { Button } from '@/UI/Button/Button';
import { CartProduct } from '@/types/Cart.types';
import { calculateCartSummary } from '@/utils/cart/calculateCartSummary';
import { useAppSelector } from '@/redux/hooks';
import notification from '@/utils/notification';
import { ProductPrices } from '@/UI/ProductPrices/ProductPrices';
import { ProductPrice } from '@/UI/ProductPrices/ProductPice';
import { selectUser } from '@/redux/selectors';
import Modal from '@/UI/Modal/Modal';
import OrderForm from '@/components/OrderForm/OrderForm';

interface Props {
  cart: CartProduct[];
}

export const Summary: FC<Props> = ({ cart }) => {
  const user = useAppSelector(selectUser, shallowEqual);
  const { t } = useTranslation();

  const [isModalOpen, setModalOpen] = useState(false);

  const { totalDiscountPrice, totalQuantity, totalPrice } = calculateCartSummary(cart);

  const handleSetOrder = () => () => {
    if (!user) {
      notification('error', 'To place an order need to sign in');

      return;
    }

    setModalOpen(true);
  };

  const priceDiff = totalPrice - totalDiscountPrice;

  return (
    <>
      <article
        className={s.container}
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div>
          {priceDiff ?
            <ProductPrices prices={{ priceDiscount: totalDiscountPrice, priceRegular: totalPrice }} />
          : <ProductPrice price={totalPrice} />}

          <h4 className={(cn('primary-text'), s.amount)}>{t('cartPage.totalForItems', { totalQuantity })}</h4>
          <div className={cn('line', s.line)}></div>
        </div>

        <Button
          onClick={handleSetOrder()}
          label={t('cartPage.checkout')}
        />
      </article>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <OrderForm />
        </Modal>
      )}
    </>
  );
};
