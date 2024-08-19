//import React from 'react'

import Container from '../Layout/Container';

const About = () => {
  return (
    <>
      <div className="py-[136px]">
        <Container>
          <div className="mt-[136px]">
            <div className="flex ">
              <div className="bg-primary w-[413px] h-[361px] py-[100px] px-[75px]">
                <h2 className="w-[262px] font-sans text-white text-3xl font-semibold">
                  Learn more about our company
                </h2>
              </div>
              <div>
                <div
                  style={{
                    background: ' url(./src/assets/service4.png )',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                  }}
                >
                  <div className="w-[713px] h-[361px] ">
                    <button className="m-[0 auto] pl-[275px] pt-[175px]">
                      <a
                        href=""
                        className="font-sans text-primary font-semibold bg-white py-1 px-2 md:py-3.5 md:px-8 hover:text-blue-700 hover:bg-[#28242430] hover:border-2"
                      >
                        LEARN MORE
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
