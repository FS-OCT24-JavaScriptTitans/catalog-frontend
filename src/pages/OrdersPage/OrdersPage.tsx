import { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Orders from '@/components/Orders/Orders';
import { getOrders } from '@/api/firebase/db/order/getOrders';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectOrders, selectUser } from '@/redux/selectors';
import { Loader } from '@/components/Loader/Loader';
import { addOrders } from '@/redux/slices/orders/orders.slice';
import notification from '@/utils/notification';
import EmptyContainer from '@/UI/EmpttContainer/EmptyContainer';

const OrdersPage = () => {
  const [isLoading, setLoading] = useState(false);
  const orders = useAppSelector(selectOrders, shallowEqual);
  const user = useAppSelector(selectUser, shallowEqual);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (orders.length) return;

    setLoading(true);

    if (user) {
      getOrders(user?.email)
        .then((res) => (typeof res !== 'string' ? dispatch(addOrders({ orders: res })) : notification('error', res)))
        .catch(() => notification('error', 'An unexpected error'))
        .finally(() => setLoading(false));
    }
  }, [orders.length, dispatch, navigate, user]);

  return (
    <>
      {isLoading && <Loader />}
      {orders.length ?
        <Orders orders={orders} />
      : <EmptyContainer
          title="There no orders yet"
          pathToImg="/img/order-is-empty.png"
        />
      }
    </>
  );
};

export default OrdersPage;
