import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getAllProducts } from '@/api/products/products.api';
import { Product } from '@/types/Product.type';
import { shuffle } from '@/utils/shuffle';
import ProductSlider from '@/components/ProductSlider/ProductSlider';

export const ProductRecommended = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    getAllProducts().then((res) => {
      if (res) {
        setProducts(shuffle(res));
      }
    });
  }, []);

  return (
    <ProductSlider
      title={t('product.alsoLike')}
      products={products}
    />
  );
};
