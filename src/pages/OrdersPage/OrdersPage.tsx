import Orders from '@/components/Orders/Orders';
import { Loader } from '@/components/Loader/Loader';
import EmptyContainer from '@/UI/EmptyContainer/EmptyContainer';
import { useOrders } from '@/hooks/useOrders';

const OrdersPage = () => {
  const { orders, isLoading } = useOrders();

  const getView = () => {
    switch (true) {
      case isLoading:
        return <Loader />;

      case !isLoading && !!orders.length:
        return <Orders orders={orders} />;

      default:
        return (
          <EmptyContainer
            title="There no orders yet"
            pathToImg="/img/order-is-empty.png"
            alt="empty-order"
          />
        );
    }
  };

  return getView();
};

export default OrdersPage;
