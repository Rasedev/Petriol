// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from '../Layout/Container';

const Hero = () => {
  return (
    <>
      <div
        style={{
          background: ' url(./src/assets/banner.png )',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          //   paddingTop: '257px',
          //   paddingBottom: '258px',
        }}
        // className='relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-overlay'
      >
        <div className="w-full h-full bg-overlay py-[150px] md:py-[258px]">
          <Container>
            <h1 className="font-sans text-[15px] md:text-[64px] font-bold text-white md:w-[842px] mb-[30px]">
              We exist since 1975 on the oil and gas industry.
            </h1>
            <button>
              <a
                href=""
                className="font-sans text-base font-semibold text-white bg-primary py-1 px-2 md:py-3.5 md:px-8 hover:text-blue-700 hover:bg-[#28242430] hover:border-2"
              >
                LEARN MORE
              </a>
            </button>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Hero;
