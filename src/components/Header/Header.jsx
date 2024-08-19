/* eslint-disable no-unused-vars */
//import React from 'react';
import { FcInvite } from 'react-icons/fc';
import { FcCallback } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <div className="bg-[#282828] text-white py-4 border-b-[3px] border-[#FFB800]">
        <div className="max-w-container mx-auto px-[10px] md:px-0 ">
          <div className="md:flex">
            <div className="md:w-3/4 md:flex">
              <div className="flex items-center gap-x-[5px] mr-[54px] relative after:content-[''] md:after:block after:hidden after:absolute after:top-[4px] after:right-[-27px] after:w-0.5 after:h-4 after:bg-[#5C6A92]">
                <FcInvite />
                <p className="font-sans">mail@yourcompany.com</p>
              </div>
              <div className="flex items-center gap-x-[5px] my-[10px] md:my-[0px]">
                <FcCallback />
                <p className="font-sans">+896 120 5889 (Toll free)</p>
              </div>
            </div>
            <div className="md:w-1/4 ">
              <div className="flex md:justify-end gap-x-5">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
