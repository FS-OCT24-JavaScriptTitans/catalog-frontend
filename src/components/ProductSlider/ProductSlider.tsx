import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ProductSlider.module.scss';

import { ProductCard } from '@/UI/ProductCard/ProductCard';
import { Product } from '@/types/Product.type';
import { Arrow } from '@/UI/Arrow/Arrow';

interface ProductSliderProps {
  title: string;
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => (
  <div className={styles.productSlider}>
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.prevButton}>
          <Arrow direction="left" />
        </button>
        <button className={styles.nextButton}>
          <Arrow direction="rigth" />
        </button>
      </div>
    </div>
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1.5}
      navigation={{
        nextEl: `.${styles.nextButton}`,
        prevEl: `.${styles.prevButton}`,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      onInit={(swiper) => {
        swiper.update();
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default ProductSlider;
