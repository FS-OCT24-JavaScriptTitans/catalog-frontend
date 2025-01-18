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

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <Container>
        <PromoSlider />
      </Container>

      <ProductSlider
        title={t('home.brand')}
        products={newModelProducts}
      />

      <CategorySection />

      <ProductSlider
        title={t('home.prices')}
        products={hotPriceProducts}
      />
    </>
  );
};

export default HomePage;
