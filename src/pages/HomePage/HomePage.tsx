import { useEffect, useState } from 'react';

import styles from './HomePage.module.scss';

import PromoSlider from '@/components/PromoSlider/PromoSlider';
import Container from '@/components/Container/Container';
import { Product } from '@/types/Product.type';
import { getAllProducts } from '@/api/products/products.api';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import { Loader } from '@/components/Loader/Loader';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();

      setProducts(allProducts || []);
    };

    fetchProducts();
  }, []);

  const newModelProducts = products.reduceRight<Product[]>((acc, product) => {
    if (product.priceDiscount < product.priceRegular) {
      acc.push(product);
    }

    return acc;
  }, []);

  const hotPriceProducts = [...products].sort(
    (p1, p2) => p2.priceRegular - p2.priceDiscount - (p1.priceRegular - p1.priceDiscount),
  );

  console.log(hotPriceProducts);

  // const regularProducts = products.filter(
  //   (product) => product.priceDiscount === product.priceRegular
  // );

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <main>
      <h1 className={styles.welcomeMessage}>Welcome to Nice Gadgets store!</h1>
      <Container className="slider">
        <PromoSlider />
      </Container>

      <Container className="brandNewModels">
        <ProductSlider
          title={'Brand new modal'}
          products={newModelProducts}
        />
      </Container>

      <Container className="ShopByCategory">
        <h2>Shop by category</h2>
      </Container>

      <Container className="hotPrice">
        <ProductSlider
          title={'Hot Price'}
          products={hotPriceProducts}
        />
      </Container>

      {/* <Container className="hotPrices">
        <ProductSlider title="Hot Prices" products={hotPrices} />
      </Container> */}
    </main>
  );
};

export default HomePage;
