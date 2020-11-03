import React from 'react';
import propTypes from 'prop-types';

function Hero({ img, children }) {
  return (
    <div
      className="flex w-100  h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(${img})`,
      }}
    >
      {children}
    </div>
  );
}
Hero.propTypes = {
  img: propTypes.string,
  children: propTypes.element.isRequired,
};

export default Hero;
