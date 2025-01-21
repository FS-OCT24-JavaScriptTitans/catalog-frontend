import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

import styles from './ProductPage.module.scss';

import Arrow from '@/assets/Arrow.svg?react';
import ProductPhotos from '@/components/Product/ProductPhotos/ProductPhotos';
import ProductMainChars from '@/components/Product/ProductMainChars/ProductMainChars';
import ProductDescription from '@/components/Product/ProductDescription/ProductDescription';
import { Product } from '@/types/Product.type';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { getProduct } from '@/api/products/products.api';
import { CustomLink } from '@/UI/Link/Link';
import { ProductRecommended } from '@/components/Product/ProductRecommended/ProductRecommended';
import { LANGUAGE } from '@/constants/language';
import { useLanguage } from '@/hooks/useLanguage';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import ProductTechSpecs from '@/components/Product/ProductTechSpecs/ProductTechSpecs';
import { Loader } from '@/components/Loader/Loader';

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState<Product | null>();
  const { getLanguage } = useLanguage();
  const language = getLanguage() as LANGUAGE;

  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    if (productId) {
      getProduct(productId, language)
        .then((currentItem) => {
          setProduct(currentItem);
        })
        .finally(() => setLoading(false));
    }
  }, [productId, language, navigate]);

  const getView = () => {
    switch (true) {
      case isLoading:
        return <Loader />;

      case !isLoading && !!product:
        return (
          <>
            <AnimatedSection animationType={'fade-down'}>
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
                />

                <ProductDescription product={product} />

                <ProductTechSpecs product={product} />
              </section>
            </AnimatedSection>

            <ProductRecommended language={language} />
          </>
        );

      default:
        return <NotFoundPage />;
    }
  };

  return getView();
};

export default ProductPage;
