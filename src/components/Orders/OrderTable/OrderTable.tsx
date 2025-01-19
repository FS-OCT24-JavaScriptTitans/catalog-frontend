import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { OrderTableItem } from '../OrderTableItem/OrderTableItem';

import s from './OrderTable.module.scss';

import { CartProduct } from '@/types/Cart.types';

interface Props {
  products: CartProduct[];
}

export const OrderTable: FC<Props> = ({ products }) => {
  const { t } = useTranslation();

  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>{t('orders.photo')}</th>
          <th className={s.th}>{t('orders.product')}</th>
          <th className={s.th}>{t('orders.quantity')}</th>
          <th className={s.th}>{t('orders.price')}</th>
          <th className={s.th}>{t('orders.total')}</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <OrderTableItem
            product={product}
            key={product.id}
          />
        ))}
      </tbody>
    </table>
  );
};
