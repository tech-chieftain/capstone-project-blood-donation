import React from 'react';
import { PropTypes } from 'prop-types';
import Navlink from '../Navlink';

function NavLinks({ classname, menuClose }) {
  const classesObject = {
    //  nav link with border at button and white text
    navStyleUnderline:
      'px-2 py-2 lg:px-6  mt-4 md:mt-0 sm:mr-0 md:mr-2 lg:mr-4 text-sm  text-white tracking-wide inline-block border-b-2 border-transparent hover:border-white ',
    //  nav link with background white
    navStyleButton:
      'px-4 py-2 lg:px-6 mt-4 md:mt-0  text-sm tracking-wide transition duration-500 ease-in-out bg-white inline-block text-primary transform  hover:scale-95',
  };

  return (
    <ul className={`md:flex  ${classname}   md:w-auto w-full text-start mt-6 md:mt-0`}>
      <Navlink
        path="/"
        styleName={classesObject.navStyleUnderline}
        text="Home"
        menuClose={menuClose}
      />
      <Navlink
        path="/about"
        styleName={classesObject.navStyleUnderline}
        text="About"
        menuClose={menuClose}
      />
      <Navlink
        path="/instructions"
        styleName={classesObject.navStyleUnderline}
        text="Instruction"
        menuClose={menuClose}
      />
      <Navlink
        path="/process"
        styleName={classesObject.navStyleUnderline}
        text="Process"
        menuClose={menuClose}
      />
      <Navlink
        path="/search"
        styleName={classesObject.navStyleUnderline}
        text="Search"
        menuClose={menuClose}
      />
      <Navlink
        path="/donate"
        styleName={classesObject.navStyleButton}
        text="Donate"
        menuClose={menuClose}
      />
    </ul>
  );
}
NavLinks.propTypes = {
  classname: PropTypes.string.isRequired,
  menuClose: PropTypes.func.isRequired,
};
export default NavLinks;
