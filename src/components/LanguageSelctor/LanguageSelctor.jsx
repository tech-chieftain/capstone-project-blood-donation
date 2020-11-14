import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';
import Language from './images/languageicon.svg';

function LanguageSelctor({ menuClose }) {
  const [languageflag, setlanguageflag] = useState(false);
  const { i18n } = useTranslation();
  const onclick = () => {
    setlanguageflag(!languageflag);
    i18n.changeLanguage(languageflag ? 'en' : 'ar');
    if (menuClose) menuClose();
  };

  return (
    <div className=" py-2 sm:py-0 lg:px-2  mt-2 md:mt-0  text-sm flex items-center">
      {languageflag === false ? (
        <button type="button" className="flex   focus:outline-none " onClick={onclick}>
          <p className="mr-1 text-white ">عربي</p>
          <img className="w-6 h-6 rounded-full object-cover  " src={Language} alt="Arabic" />
        </button>
      ) : (
        <button type="button" className="flex  focus:outline-none" onClick={onclick}>
          <p className="ml-1 text-white ">Eng</p>
          <img className="w-6 h-6 rounded-full object-cover" src={Language} alt="Enlish" />
        </button>
      )}
    </div>
  );
}
LanguageSelctor.propTypes = {
  menuClose: PropTypes.func,
};

export default LanguageSelctor;
