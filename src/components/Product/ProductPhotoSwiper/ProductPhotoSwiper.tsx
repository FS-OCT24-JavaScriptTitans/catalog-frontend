import { Swiper, SwiperSlide } from 'swiper/react';

const ProductPhotoSwiper = () => (
  <Swiper
    spaceBetween={50}
    slidesPerView={1}
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
  </Swiper>
);

export default ProductPhotoSwiper;
