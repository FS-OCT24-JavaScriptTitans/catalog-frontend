import React from 'react';
import cn from 'classnames';

import styles from '../../pages/ProductPage/styles/Description.module.scss';

import { Product } from '@/types/Product.type';

type Props = {
  product: Product;
};

const ProductDescription: React.FC<Props> = ({ product }) => (
  <article className={styles.description}>
    <h3>About</h3>

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

export default ProductDescription;
