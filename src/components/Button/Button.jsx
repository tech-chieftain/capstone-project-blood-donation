import React from 'react';
import { PropTypes } from 'prop-types';

function Button({ text, onclick, classFlag }) {
  const classesObject = {
    // white button
    buttonWhite:
      'inline-block text-primary-100 text-base md:text-lg  text-center md:font-medium bg-white  md:mt-8 mt-4 px-8 md:px-12 lg:px-16 py-1 lg:py-2  shadow-md transition duration-500 ease-in-out transform hover:scale-95',
    // red button
    buttonRed:
      'inline-block text-white text-base md:text-lg  text-center md:font-medium bg-primary  md:mt-8 mt-4 px-8 md:px-12 lg:px-16 py-1 lg:py-2  shadow-md transition duration-500 ease-in-out transform hover:scale-95',
  };
  return (
    <button
      type="button"
      onClick={onclick}
      // if the classFlag is true it is white button if false then red button
      className={classFlag ? classesObject.buttonWhite : classesObject.buttonRed}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  classFlag: PropTypes.bool,
};
export default Button;
