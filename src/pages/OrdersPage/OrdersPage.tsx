import Orders from '@/components/Orders/Orders';
import { Loader } from '@/components/Loader/Loader';
import EmptyContainer from '@/UI/EmptyContainer/EmptyContainer';
import { useOrders } from '@/hooks/useOrders';

const OrdersPage = () => {
  const { orders, isLoading } = useOrders();

  return (
    <>
      {isLoading && <Loader />}
      {orders.length ?
        <Orders orders={orders} />
      : <EmptyContainer
          title="There no orders yet"
          pathToImg="/img/order-is-empty.png"
          alt="empty-order"
        />
      }
    </>
  );
};

export default OrdersPage;
