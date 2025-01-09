import React from 'react';

import styles from './HomePage.module.scss';

import Container from '@/components/Container/Container';

const HomePage: React.FC = () => (
  <main>
    <h1 className={styles.welcomeMessage}>Welcome to Nice Gadgets store!</h1>
    <Container className="slider">
      <h2>Slider</h2>
    </Container>
    <Container className="brandNewModels">
      <h2>Brand New Models</h2>
    </Container>
    <Container className="shopByCategory">
      <h2>Shop by Category</h2>
    </Container>
    <Container className="hotPrices">
      <h2>Hot Prices</h2>
    </Container>
  </main>
);

export default HomePage;
