import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import PromoSlider from '@/components/PromoSlider/PromoSlider';
import { Container } from '@/UI/Container/Container';
import { Product } from '@/types/Product.type';
import { getAllProducts } from '@/api/products/products.api';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import { Loader } from '@/components/Loader/Loader';
import { sortNewModal, sortByHotPrice } from '@/utils/products/sortProducts';
import CategorySection from '@/components/CategorySection/CategorySection';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();

      setProducts(allProducts || []);
    };

    fetchProducts();
  }, []);

  const newModelProducts = sortNewModal(products);
  const hotPriceProducts = sortByHotPrice(products);

  if (!products.length) {
    return <Loader />;
  }

  return (
    <>
      <AnimatedSection
        animationType="zoom-in"
        animationDelay="0"
        animationDuration="1000"
      >
        <Container>
          <PromoSlider />
        </Container>
      </AnimatedSection>

      <AnimatedSection
        animationType="fade-down"
        animationOffset="380"
      >
        <ProductSlider
          title={t('home.brand')}
          products={newModelProducts}
        />
      </AnimatedSection>

      <AnimatedSection
        animationType="fade-right"
        animationOffset="250"
      >
        <CategorySection />
      </AnimatedSection>

      <AnimatedSection
        animationType="fade-up"
        animationOffset="475"
      >
        <ProductSlider
          title={t('home.prices')}
          products={hotPriceProducts}
        />
      </AnimatedSection>
    </>
  );
};

export default HomePage;
