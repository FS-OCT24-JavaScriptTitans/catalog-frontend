import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './ProductPhotos.module.scss';

import { Product } from '@/types/Product.type';

type Props = {
  product: Product;
};

const ProductPhotos: React.FC<Props> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  useEffect(() => {
    setSelectedImage(product?.images[0]);
  }, [product]);

  return (
    <>
      <div className={styles.mainImageBox}>
        <img
          src={`/${selectedImage}`}
          alt="product image"
          className={styles.mainPhoto}
        />
      </div>

      <div className={styles.imagesContainer}>
        {product.images.map((imageLink, index) => (
          <div
            key={index}
            className={styles.imageBox}
          >
            <img
              src={`/${imageLink}`}
              alt="product image"
              className={cn(styles.photo, { [styles.active]: selectedImage === imageLink })}
              onClick={() => setSelectedImage(imageLink)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPhotos;
