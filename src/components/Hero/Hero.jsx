import React from "react";
import propTypes from 'prop-types';

function Hero({ img, childComponent }) {
    return (
        <div className="flex w-100  h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(${img})` }}>
            {childComponent}

        </div>
    );
}
Hero.prototype = {
    img: propTypes.string,
    childComponent: propTypes.element.isRequired
}

export default Hero;