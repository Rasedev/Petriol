//import React from 'react'

import Glide, { Autoplay } from '@glidejs/glide/dist/glide.modular.esm';

const Slider2 = () => {
  new Glide('.glide').mount({ Autoplay });
  return (
    <>
      slidesToShow: {5}, slidesToScroll: {1}, draggable: {true}, dots: {'.dots'},
      {/* arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  } */}
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">0</li>
            <li className="glide__slide">1</li>
            <li className="glide__slide">2</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slider2;
