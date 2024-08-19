//import React from 'react'
import { FcInvite } from 'react-icons/fc';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';

import Container from '../Layout/Container';

const Footer = () => {
  return (
    <>
      <div className="bg-secondary h-[552px]">
        <Container>
          <div className="flex justify-between pt-[148px]">
            <div>
              <div>
                <img className="w-[192px] h-[44px]" src="./src/assets/Logo222.png" alt="" />
                <div className="pt-[33px]">
                  <div className="flex items-center gap-x-[5px] mr-[54px] pb-[15px]">
                    <FcInvite className="w-[20px] h-[20px] text-white" />
                    <p className="w-[236px] font-sans text-white text-[14px] font-normal ">
                      mail@yourcompany.com
                    </p>
                  </div>

                  <div className="flex items-center gap-x-[5px] my-[10px] md:my-[0px] pb-[15px]">
                    <MdOutlinePhoneInTalk className="w-[20px] h-[20px] text-white" />
                    <p className="w-[236px] font-sans text-white text-[14px] font-normal">
                      +896 120 5889 (Toll free)
                    </p>
                  </div>
                  <div className="flex items-center gap-x-[5px] my-[10px] md:my-[0px] pb-[41px]">
                    <FaMapMarkedAlt className="w-[20px] h-[20px] text-white" />
                    <p className="w-[309px] font-sans text-white text-[14px] font-normal">
                      101 Baker Street, New York, USA, 12345
                    </p>
                  </div>
                  <div className="flex items-center gap-x-[5px] my-[10px] md:my-[0px] pb-[41px] ">
                    <div className="mr-[25px]">
                      {' '}
                      <FaFacebookF className="text-white w-[29px]  h-[29px]  bg-primary rounded-full p-[5px]" />
                    </div>
                    <div className="mr-[25px]">
                      <AiOutlineTwitter className="text-white w-[29px]  h-[29px]  bg-primary rounded-full p-[5px]" />
                    </div>
                    <div className="mr-[25px]">
                      <BiLogoLinkedin className="text-white w-[29px]  h-[29px]  bg-primary rounded-full p-[5px]" />
                    </div>
                    <div>
                      <BiLogoInstagram className="text-white w-[29px]  h-[29px]  bg-primary rounded-full p-[5px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <ul className="">
                <li className="pb-[10px]">
                  <a
                    href=""
                    className="font-sans text-base font-bold text-white hover:text-blue-700"
                  >
                    Company
                  </a>
                </li>
                <li className="py-[12px]">
                  <a
                    href=""
                    className="font-sans text-[14px] font-semibold text-white hover:text-blue-700"
                  >
                    Home
                  </a>
                </li>
                <li className="py-[12px]">
                  <a
                    href=""
                    className="font-sans text-[14px] font-semibold text-white hover:text-blue-700"
                  >
                    About
                  </a>
                </li>
                <li className="py-[12px]">
                  <a
                    href=""
                    className="font-sans text-[14px] font-semibold text-white hover:text-blue-700"
                  >
                    Services
                  </a>
                </li>
                <li className="py-[12px]">
                  <a
                    href=""
                    className="font-sans text-[14px] font-semibold text-white hover:text-blue-700 "
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="">
                <li className="pb-[10px]">
                  <a
                    href=""
                    className="font-sans text-base font-bold text-white hover:text-blue-700"
                  >
                    Others
                  </a>
                </li>
                <li className="py-[12px]">
                  <a
                    href=""
                    className="font-sans text-[14px] font-semibold text-white hover:text-blue-700"
                  >
                    Blog
                  </a>
                </li>
                <li className="py-[12px]">
                  <a
                    href=""
                    className="font-sans text-[14px] font-semibold text-white hover:text-blue-700"
                  >
                    Content
                  </a>
                </li>
                <li className="py-[12px]">
                  <a
                    href=""
                    className="font-sans text-[14px] font-semibold text-white hover:text-blue-700"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="py-[12px]">
                  <a
                    href=""
                    className="font-sans text-[14px] font-semibold text-white hover:text-blue-700 "
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="">
                <li className="pb-[21px]">
                  <a
                    href=""
                    className="font-sans text-base font-bold text-white hover:text-blue-700"
                  >
                    Certificate
                  </a>
                </li>
                <ul className="flex">
                  <li className="pr-[5px]">
                    <a href="">
                      {' '}
                      <img src="./src/assets/Cart1.png" alt="" />
                    </a>
                  </li>
                  <li className="">
                    <a href="">
                      {' '}
                      <img src="./src/assets/Cart2.png" alt="" />
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#282828] h-[109px]">
        <Container>
          <h2 className="font-sans text-common text-base font-medium py-[43px]">
            © Copyright 2022 by AltDesain Studio – All right reserved.
          </h2>
        </Container>
      </div>
    </>
  );
};

export default Footer;
