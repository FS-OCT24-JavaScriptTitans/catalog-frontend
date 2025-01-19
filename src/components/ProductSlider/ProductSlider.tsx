import React, { useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ProductSlider.module.scss';

import { ProductCard } from '@/UI/ProductCard/ProductCard';
import { Product } from '@/types/Product.type';
import { Arrow } from '@/UI/Arrow/Arrow';
import { Container } from '@/UI/Container/Container';

interface ProductSliderProps {
  title: string;
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <Container>
      <div className={styles.productSliderContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.buttonContainer}>
            <button
              className={styles.prevButton}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Arrow direction="left" />
            </button>
            <button
              className={styles.nextButton}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Arrow direction="rigth" />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.5}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default ProductSlider;
