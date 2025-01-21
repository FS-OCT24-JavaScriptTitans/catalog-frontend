import Orders from '@/components/Orders/Orders';
import { Loader } from '@/components/Loader/Loader';
import EmptyContainer from '@/UI/EmptyContainer/EmptyContainer';
import { useOrders } from '@/hooks/useOrders';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

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
            pathToImg="/img/order-empty.png"
            alt="empty-order"
          />
        );
    }
  };

  return <AnimatedSection animationType={'fade-right'}>{getView()} </AnimatedSection>;
};

export default OrdersPage;
