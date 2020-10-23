import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function NavLink({ classname, stytleflage }) {
  const classesObject = {
    //  nav link with border at button and white text
    navStyleUnderline:
      'px-2 py-1 md:px-2 lg:px-4 mt-4 md:mt-0 sm:mr-0 md:mr-2 lg:mr-6 text-sm md:text-base text-white tracking-wide inline-block border-b-2 border-transparent hover:border-white ',
    //  nav link with background white
    navStyleButton:
      'px-2 py-1 md:px-2 lg:px-4 mt-4 md:mt-0 sm:mr-0 md:mr-2 lg:mr-6 text-sm md:text-base tracking-wide transition duration-500 ease-in-out bg-white inline-block text-primary transform  hover:scale-95',
  };

  return (
    <ul className={`md:flex  ${classname}  mr-8 md:w-auto w-full text-start mt-6 md:mt-0`}>
      <li>
        <Link to="/" className={classesObject.navStyleUnderline}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className={classesObject.navStyleUnderline}>
          About us
        </Link>
      </li>
      <li>
        <Link to="/instructions" className={classesObject.navStyleUnderline}>
          Instruction
        </Link>
      </li>
      <li>
        <Link to="/process" className={classesObject.navStyleUnderline}>
          Process
        </Link>
      </li>
      <li>
        <Link to="/search" className={classesObject.navStyleUnderline}>
          Reasrch
        </Link>
      </li>
      <li>
        <Link
          to="/donate"
          className={stytleflage ? classesObject.navStyleUnderline : classesObject.navStyleButton}
        >
          Donate
        </Link>
      </li>
    </ul>
  );
}
NavLink.propTypes = {
  classname: PropTypes.string.isRequired,
  stytleflage: PropTypes.bool.isRequired,
};
export default NavLink;
