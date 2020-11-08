import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero';
import Paragraph from '../../components/Paragraph';
import Card from '../../components/Card';
import ContactForm from '../../components/ContactForm';
import HeroImage from './images/HeroImage.png';
import bloodplus from './images/bloodplus.svg';
import globalhealth from './images/globalhealth.svg';
import free from './images/free.svg';
import save from './images/save.svg';

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <Hero img={HeroImage}>
        <div className=" items-center mx-12 sm:mx-16 lg:mx-24 flex-wrap my-auto">
          <p className="text-white subpixel-antialiased tracking-wide font-bold text-2xl sm:text-3xl lg:text-5xl  ">
            {t('AboutPage.HeroTitle')}
          </p>
        </div>
      </Hero>
      <div className="px-6 sm:px-0 py-8 sm-py-12  w-100 sm:w-8/12 mx-auto ">
        <Paragraph
          headerText={t('AboutPage.AboutTitle')}
          paragraphText={t('AboutPage.AboutDecs')}
          headerFlag
          paragraphFlag
        />
      </div>
      <div className=" flex justify-around items-stretch flex-wrap pb-8 sm:pb-12 md:pb-20">
        <div className=" sm:w-8/12 md:w-6/12 xl:w-5/12 mt-12 ">
          <div className=" h-full w-3/4  xl:w-full shadow-lg border-1 border-gray-300  mx-auto">
            <Card
              cardImage={bloodplus}
              cardTitle={t('AboutPage.CardOneTitle')}
              cardDesc={t('AboutPage.CardOneDecs')}
              orientationText="center"
            />
          </div>
        </div>
        <div className=" sm:w-8/12 md:w-6/12 xl:w-5/12 mt-12 ">
          <div className=" h-full w-3/4  xl:w-full shadow-lg border-1 border-gray-300  mx-auto">
            <Card
              cardImage={globalhealth}
              cardTitle={t('AboutPage.CardTwoTitle')}
              cardDesc={t('AboutPage.CardTwoDecs')}
              orientationText="center"
            />
          </div>
        </div>
        <div className=" sm:w-8/12 md:w-6/12 xl:w-5/12 mt-12 ">
          <div className=" h-full w-3/4  xl:w-full shadow-lg border-1 border-gray-300  mx-auto">
            <Card
              cardImage={free}
              cardTitle={t('AboutPage.CardThreeTitle')}
              cardDesc={t('AboutPage.CardThreeDecs')}
              orientationText="center"
            />
          </div>
        </div>
        <div className=" sm:w-8/12 md:w-6/12 xl:w-5/12 mt-12 ">
          <div className=" h-full w-3/4  xl:w-full shadow-lg border-1 border-gray-300  mx-auto">
            <Card
              cardImage={save}
              cardTitle={t('AboutPage.CardFourTitle')}
              cardDesc={t('AboutPage.CardFourDecs')}
              orientationText="center"
            />
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-0 py-8 sm-py-12  w-100 sm:w-8/12 mx-auto ">
        <Paragraph
          headerText={t('AboutPage.ContectTitle')}
          paragraphText={t('AboutPage.ContectDecs')}
          headerFlag
          paragraphFlag
        />
        <ContactForm />
      </div>
    </div>
  );
}

export default About;
