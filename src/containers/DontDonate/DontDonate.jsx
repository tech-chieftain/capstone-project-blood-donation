import React from 'react';
import image from './images/doctor-office-and-blood-donation-design-vector-22887400.jpg';
import { useTranslation } from 'react-i18next';

function DontDonate() {
  const { t } = useTranslation();
  const styleClass = {
    headerStyle: `text-primary-100  sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold `,
    paragrphStyle: `  sm:text-sm md:text-base lg:text-lg text-center `,
  };

  return (
    <div className="flex">
      <div className="  sm:w-full  md:w-full lg:w-6/12 p-10  ">
        <h1 className={styleClass.headerStyle } >{t('dontDonate.header')} </h1>
        <p className={styleClass.paragrphStyle} >
          <br /> {t('dontDonate.firstParagraph')}<br />
          <br /> {t('dontDonate.secondParagraph')}<br />
          <br />
          {t('dontDonate.thirdParagraph')}
        </p>
      </div>

      <div className="  sm: hidden  md: hidden 	lg:flex w-6/12  p-10 ">
        <img src={image} alt="donateImage " />
      </div>
    </div>
  );
}

export default DontDonate;
