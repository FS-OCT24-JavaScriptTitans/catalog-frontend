import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getAllProducts } from '@/api/products/products.api';
import { Product } from '@/types/Product.type';
import { shuffle } from '@/utils/shuffle';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import { LANGUAGE } from '@/constants/language';

type Props = {
  language: LANGUAGE;
};

export const ProductRecommended: React.FC<Props> = ({ language }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts(language);

      setProducts(allProducts || []);
    };

    fetchProducts();
  }, [language]);

  return (
    <ProductSlider
      title={t('product.alsoLike')}
      products={shuffle(products)}
    />
  );
};
