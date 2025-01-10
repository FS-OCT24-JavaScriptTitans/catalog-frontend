import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './PromoSlider.module.scss';

const slides = [
  {
    id: 1,
    title: 'Now available in our store!',
    subtitle: 'iPhone 14 Pro',
    description: 'Pro. Beyond.',
    image: 'public/img/phones/apple-iphone-14/purple/00.webp',
  },
  {
    id: 2,
    title: 'Unleash the power!',
    subtitle: 'iPad Pro',
    description: 'Performance redefined.',
    image: 'public/img/tablets/apple-ipad-mini-6th-gen/spacegray/02.webp',
  },
  {
    id: 3,
    title: 'Stay connected!',
    subtitle: 'Apple Watch',
    description: 'On your wrist.',
    image: 'public/img/accessories/apple-watch-series-4/silver/00.webp',
  },
];

const PromoSlider: React.FC = () => (
  <div className={styles.sliderContainer}>
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={styles.slide}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{slide.title}</h2>
              <h1 className={styles.subtitle}>{slide.subtitle}</h1>
              <p className={styles.description}>{slide.description}</p>

              <img
                src={slide.image}
                alt={slide.subtitle}
                className={styles.image}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default PromoSlider;
