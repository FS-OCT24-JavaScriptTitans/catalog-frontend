import React, { useState, useRef, useEffect } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './PromoSlider.module.scss';

import Arrow from '@/assets/Arrow.svg?react';

const slides = {
  titles: {
    mobile: 'public/img/slides/banner/bgc-mobile.png',
    tablet: 'public/img/slides/banner/bgc-tablet.jpg',
    desktop: 'public/img/slides/banner/bgc-desctop.jpg',
  },
  common: ['public/img/slides/banner/banner-accessories.png', 'public/img/slides/banner/banner-tablets.png'],
};

const PromoSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>(
    window.innerWidth >= 1200 ? 'desktop'
    : window.innerWidth >= 640 ? 'tablet'
    : 'mobile',
  );
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setScreenSize('desktop');
      } else if (window.innerWidth >= 640) {
        setScreenSize('tablet');
      } else {
        setScreenSize('mobile');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBulletClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      setActiveIndex(index);
    }
  };

  const titleSlide = slides.titles[screenSize];
  const allSlides = [titleSlide, ...slides.common];

  return (
    <>
      <div>
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop
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
            {allSlides.map((slide, index) => (
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

        <div className={styles.paginationWrapper}>
          {allSlides.map((_, index) => (
            <div
              key={index}
              className={`${styles.bullet} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => handleBulletClick(index)}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.prevButton}>
        <Arrow />
      </div>
      <div className={styles.nextButton}>
        <Arrow />
      </div>
    </>
  );
};

export default PromoSlider;
