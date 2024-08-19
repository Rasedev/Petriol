
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
//import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Container from '../Layout/Container';

const SliderLogo = () => {
  return (
    <>
      <div className="bg-[#fff]">
        <Container>
          <Swiper
            slidesPerView={4}
            // spaceBetween={10}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="mt-[50px]" src="./src/assets/Logo1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mt-[50px]" src="./src/assets/Logo2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mt-[50px]" src="./src/assets/Logo3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mt-[50px]" src="./src/assets/Logo4.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mt-[50px]" src="./src/assets/Logo3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mt-[50px]" src="./src/assets/Logo2.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </>
  );
};

export default SliderLogo;
