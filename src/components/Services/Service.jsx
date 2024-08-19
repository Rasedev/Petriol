//import React from 'react';
//import { img1 } from '../../assets/service1.png';

const Service = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <div className="ml-[138px]">
            <div></div>
            <h1 className="font-sans text-[15px] md:text-[64px] font-bold text-secondary md:w-[509px] text-center mx-auto">
              Our Services
            </h1>
            <p className="font-sans text-[15px] md:text-[16px] font-medium text-common text-center mx-auto md:w-[405px] ">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
          </div>

          <div
            className="w-1/2"
            style={{
              background: ' url(./src/assets/service1.png )',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="w-full h-[400px] bg-overlay py-[150px] md:py-[258px]">
              <div className="ml-[116px]">
                <h1 className="font-sans text-3xl font-semibold text-white mb-[33px] hover:text-blue-700font-sans font-semibold text-white mb-[30px] hover:text-blue-700">
                  Modern natural oil and gas refineries.
                </h1>
                <button>
                  <a
                    href=""
                    className="font-sans text-base font-semibold text-white bg-primary py-1 px-2 md:py-3.5 md:px-8 hover:text-blue-700 hover:bg-[#28242430] hover:border-2"
                  >
                    LEARN MORE
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/2 h-96">
            <div
              style={{
                background: ' url(./src/assets/service2.png )',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }}
            >
              <div className="w-full h-[400px] bg-overlay py-[150px] md:py-[258px]">
                <div className="ml-[116px]">
                  <h1 className="font-sans text-3xl font-semibold text-white mb-[33px] hover:text-blue-700font-sans font-semibold text-white mb-[30px] hover:text-blue-700">
                    Supply of national industries.
                  </h1>
                  <button>
                    <a
                      href=""
                      className="font-sans text-base font-semibold text-white bg-primary py-1 px-2 md:py-3.5 md:px-8 hover:text-blue-700 hover:bg-[#28242430] hover:border-2"
                    >
                      LEARN MORE
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-96">
            <div
              style={{
                background: ' url(./src/assets/service3.png )',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }}
            >
              <div className="w-full h-[400px] bg-overlay py-[150px] md:py-[258px]">
                <div className="ml-[116px]">
                  <h1 className="font-sans text-3xl font-semibold text-white mb-[33px] hover:text-blue-700font-sans font-semibold text-white mb-[30px] hover:text-blue-700">
                    National fuel distribution and supply.
                  </h1>
                  <button>
                    <a
                      href=""
                      className="font-sans text-base font-semibold text-white bg-primary py-1 px-2 md:py-3.5 md:px-8 hover:text-blue-700 hover:bg-[#28242430] hover:border-2"
                    >
                      LEARN MORE
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
