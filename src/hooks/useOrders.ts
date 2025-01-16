import { useLayoutEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectOrders, selectUser } from '@/redux/selectors';
import { addOrders } from '@/redux/slices/orders/orders.slice';
import { getOrders } from '@/api/firebase/db/order/getOrders';
import notification from '@/utils/notification';
import { PATH } from '@/constants/path';

export const useOrders = () => {
  const [isLoading, setLoading] = useState(false);
  const orders = useAppSelector(selectOrders, shallowEqual);
  const user = useAppSelector(selectUser, shallowEqual);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!user) {
      navigate(PATH.AUTH + PATH.SIGN_IN);

      return;
    }

    if (user) {
      setLoading(true);
      getOrders(user.email)
        .then((res) => {
          if (typeof res !== 'string') {
            dispatch(addOrders({ orders: res }));
          } else {
            notification('error', res);
          }
        })
        .catch(() => {
          notification('error', 'An unexpected error');
        })
        .finally(() => setLoading(false));
    }
  }, [user, dispatch, navigate]);

  return { orders, isLoading };
};
