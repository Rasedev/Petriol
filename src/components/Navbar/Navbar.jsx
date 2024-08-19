// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '../../assets/Logo.png';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import Container from '../Layout/Container';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="bg-primary py-[27px]">
      {/* <div className="max-w-container mx-auto px-[10px] md:px-0 ">    
      </div> */}
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-1/5">
            <img src={logo} alt="" />
          </div>
          <div>
            <div onClick={handleClick} className="md:hidden">
              {/*  */}
              {show == true ? <RxCross1 /> : <FaBars />}
            </div>
            <div className="w-4/5">
              <ul
                className={`md:flex  gap-x-[47px]  md:static absolute w-full top-[-170px] left-0 ${
                  show ? 'top-[170px] p-[12px] bg-teal-500' : 'top - 0'
                }`}
              >
                <li className="">
                  <a
                    href=""
                    className="font-sans text-base font-semibold text-white hover:text-blue-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-sans text-base font-semibold text-white hover:text-blue-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-sans text-base font-semibold text-white hover:text-blue-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-sans text-base font-semibold text-white hover:text-blue-700 "
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-sans text-base font-semibold text-white mb-[30px] hover:text-blue-700"
                  >
                    Blog
                  </a>
                </li>
                <li className="">
                  <a
                    href=""
                    className="font-sans text-base font-semibold text-white border-2 py-3.5 px-8 hover:text-blue-700 hover:bg-[#28242430]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
