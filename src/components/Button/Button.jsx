import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ text, onClick, styleName, path }) {
  // the differnt styles for the button
  const classesObject = {
    //  nav link with border at button and white text
    navStyleUnderline:
      'px-4 py-1 mt-4 text-xs md:text-sm inline-block md:mt-0 text-white  hover:text-gray-100 border-b-2 border-transparent hover:border-white  lg:mr-8 mr-0',
    //  nav link with background white
    navStyleButton:
      'transition text-xs md:text-sm duration-500 ease-in-out bg-white px-6 py-1 mt-4 inline-block md:mt-0 text-primary border-b-2 border-transparent hover:bg-gray-100  lg:mr-8 mr-0 rounded',
    // white button used at the hero section
    buttonWhite:
      'transition text-sm md:text-base text-center tracking-normal font-medium inline-block duration-500 ease-in-out bg-white px-8 md:px-12 py-1 md:py-2 mt-8 md:mt-0 ml-6 text-primary hover:bg-gray-100 rounded',
    // red button used can be used at the home page
    buttonRed:
      'inline-block text-sm md:text-base text-center tracking-normal font-medium transition duration-500 ease-in-out bg-primary px-8 md:px-12 py-1 md:py-2 mt-8 md:mt-0  ml-6 text-white hover:bg-primary-100 rounded',
  };
  // see whither the onClick prop exist the decide which type of link
  return (
    <>
      {onClick ? (
        <Link to={path} onClick={onClick} className={classesObject[styleName]}>
          {text}
        </Link>
      ) : (
        <Link to={path} className={classesObject[styleName]}>
          {text}
        </Link>
      )}
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  styleName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Button;
