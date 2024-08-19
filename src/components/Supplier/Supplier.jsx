//import React from 'react'

import Container from '../Layout/Container';

const Supplier = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="pt-[78px] pb-[100px] font-sans text-[#000] text-5xl font-bold leading-[72px] w-[290px]">
            The biggest supplier on the country
          </h1>
          <p className="font-sans font-medium py-[161px] w-[651px] text-common text-[16px]">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Supplier;
