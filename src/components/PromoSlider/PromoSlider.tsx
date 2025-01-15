import React, { useState, useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './PromoSlider.module.scss';

import { Arrow } from '@/UI/Arrow/Arrow';

const slides = [
  {
    img: 'img/slides/banner-phones.png',
    link: '/phones',
  },
  {
    img: 'img/slides/banner-tablets.png',
    link: '/tablets',
  },
  {
    img: 'img/slides/banner-accessories.png',
    link: '/accessories',
  },
];

const PromoSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const navigate = useNavigate();

  const handleBulletClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      setActiveIndex(index);
    }
  };

  const handleSlideClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.prevButton}>
        <Arrow direction={'left'} />
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={100}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3000, // Затримка в мілісекундах (3 секунди)
            disableOnInteraction: false, // Свайпер не зупиняється після взаємодії
          }}
          navigation={{
            nextEl: `.${styles.nextButton}`,
            prevEl: `.${styles.prevButton}`,
          }}
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
              <div
                className={styles.imageContainer}
                onClick={() => handleSlideClick(slide.link)}
              >
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className={styles.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

      <div className={styles.nextButton}>
        <Arrow direction={'rigth'} />
      </div>
    </div>
  );
};

export default PromoSlider;
