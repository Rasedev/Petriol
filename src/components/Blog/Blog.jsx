// //import React from 'react'

import Container from '../Layout/Container';
import { BsArrowRight } from 'react-icons/bs';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-flip';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import '../Slider/Slider.css';

// // import required modules
// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

// const Blog = () => {
//   return (
//     <>
//       <Swiper
//         effect={'flip'}
//         grabCursor={true}
//         pagination={true}
//         navigation={true}
//         modules={[EffectFlip, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// };

// export default Blog;

const Blog = () => {
  return (
    <>
      <div>
        <Container>
          <div className="flex justify-between pt-[110px] pb-[162px]">
            <div
              className=""
              style={{
                background: ' url(./src/assets/blog1.png )',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundAttachment: 'fixed',
              }}
            >
              <div className="w-[339px] h-[401px] bg-overlay">
                <div className="ml-[46px] ">
                  <h1 className="w-[249px] font-sans text-[24px] font-semibold text-white mb-[30px] pt-[75px]">
                    lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                  </h1>
                  <button>
                    <a
                      href=""
                      className="font-sans text-base font-semibold text-white bg-common py-1 px-2 md:py-3.5 md:px-8 hover:text-blue-700 hover:bg-[#28242430] hover:border-2"
                    >
                      Read more
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className=""
              style={{
                background: ' url(./src/assets/blog2.png )',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundAttachment: 'fixed',
              }}
            >
              <div className="w-[339px] h-[401px] bg-overlay">
                <div className="ml-[46px] ">
                  <h1 className="w-[249px] font-sans text-[24px] font-semibold text-white mb-[30px] pt-[75px]">
                    lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                  </h1>
                  <button>
                    <a
                      href=""
                      className="font-sans text-base font-semibold text-white bg-common py-1 px-2 md:py-3.5 md:px-8 hover:text-blue-700 hover:bg-[#28242430] hover:border-2"
                    >
                      Read more
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className=""
              style={{
                background: ' url(./src/assets/blog3.png )',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundAttachment: 'fixed',
              }}
            >
              <div className="w-[339px] h-[401px] bg-overlay">
                <div className="ml-[46px] ">
                  <h1 className="w-[249px] font-sans text-[24px] font-semibold text-white mb-[30px] pt-[75px]">
                    lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                  </h1>
                  <button>
                    <a
                      href=""
                      className="font-sans text-base font-semibold text-white bg-common py-1 px-2 md:py-3.5 md:px-8 hover:text-blue-700 hover:bg-[#28242430] hover:border-2"
                    >
                      Read more
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center relative absolute left-[-10px] bottom-[145px] ">
            <h2 className="font-sans text-base font-semibold text-secondary mr-[10px]">
              MORE FROM THE BLLOG
            </h2>

            <BsArrowRight className="w-[25px] h-[25px]" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog;
