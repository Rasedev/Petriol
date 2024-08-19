//import React from 'react'

import GoogleMapReact from 'google-map-react';

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <>
      <div className="w-full h-[450px] ">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: '',
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>

        <div className="w-full h-[145px] bg-primary relative absloute bottom-[30px]">
          <div className="flex items-center justify-center ml-[116px] pt-[46px] pb-[45px]">
            <h1 className="w-[959px] font-sans text-[36px] font-semibold text-white ">
              Want to join as member branch in your area?
            </h1>
            <button className="w-[142px] h-[51px]">
              <a
                href=""
                className=" font-sans text-base font-semibold text-white py-1 px-2 md:py-3.5 md:px-8 hover:text-blue-700 hover:bg-[#28242430] hover:border-2"
              >
                CONTACT
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
