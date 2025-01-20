import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './ProductPage.module.scss';

import Arrow from '@/assets/Arrow.svg?react';
import ProductPhotos from '@/components/Product/ProductPhotos/ProductPhotos';
import ProductMainChars from '@/components/Product/ProductMainChars/ProductMainChars';
import ProductDescription from '@/components/Product/ProductDescription/ProductDescription';
import ProductTechSpecs from '@/components/Product/ProductTechSpecs/ProductTechSpecs';
import { Product } from '@/types/Product.type';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { CustomLink } from '@/UI/Link/Link';
import { ProductRecommended } from '@/components/Product/ProductRecommended/ProductRecommended';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

function getProductApi(input: string): Promise<Product[]> {
  const searchedPath = input.split('/')[1];
  let API_URL = '';

  switch (searchedPath) {
    case 'phones':
      API_URL = '../../../api/phones.json';
      break;

    case 'tablets':
      API_URL = '../../../api/tablets.json';
      break;

    case 'accessories':
      API_URL = '../../../api/accessories.json';
      break;
  }

  return fetch(API_URL).then((response) => response.json());
}

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState<Product>();

  const { t } = useTranslation();

  useEffect(() => {
    getProductApi(location.pathname).then((currentApi) => setProduct(currentApi.find((item) => productId === item.id)));
  }, [location.pathname, productId]);

  let techSpecs = [];

  if (location.pathname.includes('accessories')) {
    techSpecs = Object.entries({ ...product }).slice(-5);
  } else {
    techSpecs = Object.entries({ ...product }).slice(-7);
  }

  return (
    product && (
      <>
        <AnimatedSection animationType={'fade-left'}>
          <section className={cn(styles.productCard, 'section')}>
            <div className={styles.breadCrumbs}>
              <Breadcrumb />
            </div>

            <CustomLink path="..">
              <div className={cn(styles.back, 'small-text')}>
                <Arrow transform="rotate(180)" />
                {t('back')}
              </div>
            </CustomLink>

            <h2 className={styles.mainTitle}>{product.name}</h2>

            <ProductPhotos product={product} />

            <ProductMainChars
              product={product}
              location={location.pathname}
              techSpecs={techSpecs}
            />

            <ProductDescription product={product} />

            <ProductTechSpecs techSpecs={techSpecs} />
          </section>{' '}
        </AnimatedSection>

        <AnimatedSection animationType={'fade-up'}>
          <ProductRecommended />
        </AnimatedSection>
      </>
    )
  );
};

export default ProductPage;
