import React, { useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import styles from './ProductPhotos.module.scss';

import 'swiper/css/navigation';
import { Product } from '@/types/Product.type';

type Props = {
  product: Product;
  selectedImage: string;
  setSelectedImage: (selectedImage: string) => void;
};

const ProductPhotoSwiper: React.FC<Props> = ({ product, selectedImage, setSelectedImage }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.realIndex;

    setSelectedImage(product.images[currentIndex]);
  };

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={100}
      slidesPerView={1}
      loop
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
  );
};

export default ProductPhotoSwiper;
