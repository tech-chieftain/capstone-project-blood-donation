import React from 'react';
import SocialIcons from './SocialIcons/SocialIcons';
import NavLinks from '../Navlinks';
import Logo from '../images/Logo';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-primary flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 ">
        <div className="mb-5">
          <Logo />
        </div>
        <div className="w-8/12 lg:w-6/12">
          {/* text-black text-xl sm:text-1xl md:text-2xl lg:text-2xl */}
          <p className="text-white text-center mb-2">{t('footer_text')}</p>
        </div>
        <div>
          <NavLinks classname="flex justify-center flex-wrap" classFlag />
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}

export default Footer;
