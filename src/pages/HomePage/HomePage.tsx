import styles from './HomePage.module.scss';

import Container from '@/components/Container/Container';
import PromoSlider from '@/components/PromoSlider/PromoSlider';

const HomePage: React.FC = () => (
  <main>
    <h1 className={styles.welcomeMessage}>Welcome to Nice Gadgets store!</h1>
    <Container className="slider">
      <PromoSlider />
    </Container>

    <Container className="brandNewModels">
      <h2>New modal</h2>
    </Container>

    <Container className="brandNewModels">
      <h2>Category</h2>
    </Container>

    {/* <Container className="hotPrices">
        <ProductSlider title="Hot Prices" products={hotPrices} />
      </Container> */}
  </main>
);

export default HomePage;
