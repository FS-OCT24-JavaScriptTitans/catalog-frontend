import { useEffect, useState } from 'react';

import styles from './HomePage.module.scss';

import PromoSlider from '@/components/PromoSlider/PromoSlider';
import { Container } from '@/UI/Container/Container';
import { Product } from '@/types/Product.type';
import { getAllProducts } from '@/api/products/products.api';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import { Loader } from '@/components/Loader/Loader';
import { sortNewModal, sortByHotPrice } from '@/utils/products/sortProducts';
import CategorySection from '@/components/CategorySection/CategorySection';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();

      setProducts(allProducts || []);
    };

    fetchProducts();
  }, []);

  const newModelProducts = sortNewModal(products);
  const hotPriceProducts = sortByHotPrice(products);

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <h1 className={styles.welcomeMessage}>Welcome to Nice Gadgets store!</h1>
      <Container>
        <PromoSlider />
      </Container>

      <Container>
        <ProductSlider
          title="Brand new models"
          products={newModelProducts}
        />
      </Container>

      <Container>
        <CategorySection />
      </Container>

      <Container>
        <ProductSlider
          title="Hot Price"
          products={hotPriceProducts}
        />
      </Container>
    </>
  );
};

export default HomePage;
