import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import styles from './ProductPhotos.module.scss';

import { Product } from '@/types/Product.type';

import 'swiper/css/navigation';

type Props = {
  product: Product;
};

const ProductPhotos: React.FC<Props> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;

    setSelectedImage(product.images[currentIndex]);
  };

  useEffect(() => {
    setSelectedImage(product?.images[0]);
  }, [product]);

  return (
    <>
      <div className={styles.mainImageBox}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={100}
          slidesPerView={1}
          navigation={{
            nextEl: `.${styles.nextButton}`,
            prevEl: `.${styles.prevButton}`,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          pagination={false}
        >
          {product.images.map((_, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/${selectedImage}`}
                alt="product image"
                className={styles.mainPhoto}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <img
          src={`/${selectedImage}`}
          alt="product image"
          className={styles.mainPhoto}
        /> */}
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
