import React from 'react';
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';
import Enlish from './images/english.svg';
import Arabic from './images/arabic.svg';

function LanguageSelctor({ languageflag, setlanguageflag, menuClose }) {
  const { i18n } = useTranslation();
  const onclick = () => {
    setlanguageflag(!languageflag);
    i18n.changeLanguage(languageflag ? 'en' : 'ar');
    if (menuClose) menuClose();
  };

  return (
    <div>
      {languageflag === false ? (
        <button type="button" className="flex items-center" onClick={onclick}>
          <img
            className="w-8 h-8 rounded-full object-cover object-center"
            src={Arabic}
            alt="Arabic"
          />
          <p className="mx-2 text-white">عربي</p>
        </button>
      ) : (
        <button type="button" className="flex items-center" onClick={onclick}>
          <img
            className="w-6 h-6 rounded-full object-cover object-center"
            src={Enlish}
            alt="Enlish"
          />
          <p className="mx-2 text-white">En</p>
        </button>
      )}
    </div>
  );
}
LanguageSelctor.propTypes = {
  languageflag: PropTypes.bool.isRequired,
  setlanguageflag: PropTypes.func,
  menuClose: PropTypes.func,
};

export default LanguageSelctor;
