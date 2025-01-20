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
import { Spec } from '@/types/Spec';
import { getAllProducts, getProduct } from '@/api/products/products.api';
import { Container } from '@/UI/Container/Container';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import { CustomLink } from '@/UI/Link/Link';

function shuffle(array: Product[]) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState<Product | null>();
  const [products, setProducts] = useState<Product[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    if (productId) {
      getProduct(productId).then((currentItem) => setProduct(currentItem));
    }

    const fetchProducts = async () => {
      const allProducts = await getAllProducts();

      setProducts(allProducts || []);
    };

    fetchProducts();
  }, [productId]);

  const specs: Spec = {
    screen: product?.screen,
    resolution: product?.resolution,
    processor: product?.processor,
    ram: product?.ram,
    camera: product?.camera,
    zoom: product?.zoom,
    cell: product?.cell,
  };

  const techSpecs = Object.entries(specs);
  const randomProducts = shuffle(products);

  if (location.pathname.includes('accessories')) {
    techSpecs.splice(4, 2);
  }

  return (
    product && (
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

        <div className={styles.productSlider}>
          <Container>
            <ProductSlider
              title="You may also like"
              products={randomProducts}
            />
          </Container>
        </div>
      </section>
    )
  );
};

export default ProductPage;
