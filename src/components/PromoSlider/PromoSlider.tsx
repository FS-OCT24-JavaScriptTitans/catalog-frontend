import React, { useState, useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './PromoSlider.module.scss';

const slides = [
  'public/img/slides/banner/bgc-mobile.png',
  'public/img/slides/banner/banner-accessories.png',
  'public/img/slides/banner/banner-tablets.png',
];

const PromoSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleBulletClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={false}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={styles.swiperSlide}
            >
              <div className={styles.imageContainer}>
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className={styles.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Кастомна пагінація */}
      <div className={styles.paginationWrapper}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.bullet} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => handleBulletClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;
