import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ text, onClick, styleName, path }) {
  // the differnt styles for the button
  const classesObject = {
    //  nav link with border at button and white text
    navStyleUnderline:
      'px-6 py-1 mt-4 text-base inline-block md:mt-0 text-white  hover:text-gray-100 border-b-2 border-transparent hover:border-white md:mr-4 lg:mr-8 mr-2',
    //  nav link with background white
    navStyleButton:
      'transition text-base duration-500 ease-in-out bg-white px-6 py-1 mt-4 inline-block md:mt-0 text-primary border-b-2 border-transparent hover:bg-gray-100 md:mr-4 lg:mr-8 mr-2',
    // white button used at the hero section
    buttonWhite:
      'transition text-lg inline-block duration-500 ease-in-out bg-white px-16 py-2 mt-8 ml-6 text-center text-primary hover:bg-gray-100 ',
    // red button used can be used at the home page
    buttonRed:
      'inline-block text-lg transition duration-500 ease-in-out bg-primary px-16 py-2 mt-8  ml-6 text-white text-center   hover:bg-primary-100 ',
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
