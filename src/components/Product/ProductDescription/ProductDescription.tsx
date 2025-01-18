import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './ProductDescription.module.scss';

import { Product } from '@/types/Product.type';

type Props = {
  product: Product;
};

const ProductDescription: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <article className={styles.description}>
      <h3>{t('product.about')}</h3>

      <div className={cn(styles.description__line, 'line')} />

      {product.description.map((description, index) => (
        <div
          className={styles.description__box}
          key={index}
        >
          <h4 className={styles.description__title}>{description.title}</h4>

          {description.text.map((paragraph, index) => (
            <p
              className={styles.description__text}
              key={index}
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </article>
  );
};

export default ProductDescription;
