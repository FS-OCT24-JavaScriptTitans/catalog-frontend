import React from 'react';

import srcImg from '../../../public/img/phones/apple-iphone-11/black/00.webp';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { Specifications } from '../Specifications/Specifications';

import styles from './ProductCard.module.scss';

// type Props = {
//   id: string
//   image: string;
//   title: string;
//   price: number;
//   fullPrice?: number;
// }

export const ProductCard: React.FC = () => {
  const product = {
    id: 1,
    imageSrc: srcImg,
    title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
    price: 799,
    fullPrice: 899,
  };

  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <img
          src={product.imageSrc}
          alt="Product image"
          className={styles.card__image}
        />
        <a className={`${styles.card__title} primary-text`}>Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</a>
        <div className={styles.card__price}>
          <span className={styles.card__value}>${product.price}</span>
          {product.fullPrice && <span className={styles.card__old_value}>${product.fullPrice}</span>}
        </div>
        <div className={styles.create_line}></div>
        <Specifications />
        <div className={styles.actions}>
          <Button
            label="Add to cart"
            secondaryLabel="Added"
          />
          <IconButton></IconButton>
        </div>
      </div>
    </article>
  );
};
