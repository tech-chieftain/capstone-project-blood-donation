import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Enlish from './images/english.svg';
import Arabic from './images/arabic.svg';

function LanguageSelctor() {
  const { i18n } = useTranslation();
  const [falge, setflage] = useState(true);
  const onclick = () => {
    setflage(!falge);
    i18n.changeLanguage(falge ? 'en' : 'ar');
  };

  return (
    <div>
      {falge === false ? (
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

export default LanguageSelctor;
