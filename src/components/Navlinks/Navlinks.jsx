import React from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import Navlink from '../Navlink';
import LanguageSelector from '../LanguageSelctor';

function NavLinks({ classname, menuClose, classFlag }) {
  const { t } = useTranslation();
  const classesObject = {
    //  nav link with border at button and white text
    navStyleUnderline:
      'px-2 py-2 lg:px-6  mt-2 md:mt-0 sm:mr-0 md:mr-2 lg:mr-4 text-sm  text-white tracking-wide inline-block border-b-2 border-transparent hover:border-white ',
    //  nav link with background white
    navStyleButton:
      'px-4 py-2 lg:px-6 mt-2 md:mt-0  text-sm tracking-wide transition duration-500 ease-in-out bg-white inline-block text-primary transform  hover:scale-95',
  };

  return (
    <ul className={`md:flex  ${classname}   md:w-auto w-full text-start `}>
      <Navlink
        path="/"
        styleName={classesObject.navStyleUnderline}
        text={t('nav.home')}
        menuClose={menuClose}
      />
      <Navlink
        path="/about"
        styleName={classesObject.navStyleUnderline}
        text={t('nav.about')}
        menuClose={menuClose}
      />
      <Navlink
        path="/instructions"
        styleName={classesObject.navStyleUnderline}
        text={t('nav.instructions')}
        menuClose={menuClose}
      />
      <Navlink
        path="/process"
        styleName={classesObject.navStyleUnderline}
        text={t('nav.process')}
        menuClose={menuClose}
      />
      <Navlink
        path="/search"
        styleName={classesObject.navStyleUnderline}
        text={t('nav.search')}
        menuClose={menuClose}
      />
      <Navlink
        path="/donate"
        styleName={classFlag ? classesObject.navStyleUnderline : classesObject.navStyleButton}
        text={t('nav.donate')}
        menuClose={menuClose}
      />
      <li
        className={` ${
          classFlag ? 'hidden' : 'flex sm:justify-center'
        }   order-first sm:order-first  `}
      >
        <LanguageSelector menuClose={menuClose} />
      </li>
    </ul>
  );
}
NavLinks.propTypes = {
  classname: PropTypes.string.isRequired,
  menuClose: PropTypes.func,
  classFlag: PropTypes.bool.isRequired,
};
export default NavLinks;
