import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { Cart } from '@/components/Cart/Cart';

const CartPage = () => (
  <AnimatedSection animationType={'fade-right'}>
    <Cart />
  </AnimatedSection>
);

export default CartPage;
