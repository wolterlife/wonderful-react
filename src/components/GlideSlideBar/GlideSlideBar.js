import React, { useRef } from 'react';
import Glide from 'react-glidejs';

import 'react-glidejs/dist/index.css';
import './GlideSlideBar.scss';

export default () => {
  const gliderRef = useRef(null);

  return (
    <div
      className="App"
      style={{
        background: '#A7A7A7',
      }}
    >
      <Glide
        ref={gliderRef}
        slideClassName="slider__frame"
        type="carousel"
        startAt={0}
        perView={3}
        focusAt="center"
        hoverPause={false}
        keyboard={false}
        gap={15}
        dragThreshold={false}
        autoplay={1}
        animationDuration={15000}
        animationTimingFunc="cubic-bezier(.78,.78,.36,.37)"
      >
        <img alt="" className="slide-unit" src="img/slider-photo/slider1.png" />
        <img alt="" className="slide-unit" src="img/slider-photo/slider2.png" />
        <img alt="" className="slide-unit" src="img/slider-photo/slider3.png" />
      </Glide>
      <hr className="line-second" />
      <hr className="line-first" />
    </div>
  );
};
