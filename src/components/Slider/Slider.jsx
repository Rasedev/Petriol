//import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Slider.css';
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: 1,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./src/assets/slider-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/slider-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/slider-3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/slider-4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/slider-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/slider-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/slider-3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
