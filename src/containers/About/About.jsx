import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Paragraph from '../../components/Paragraph';
import Card from '../../components/Card';
import ContactForm from '../../components/ContactForm';
import bloodplus from './images/bloodplus.svg';
import globalhealth from './images/globalhealth.svg';
import free from './images/free.svg';
import save from './images/save.svg';

function About() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>LifeVessel - About</title>
      </Helmet>
      <div className="px-6 sm:px-0 py-8 sm-py-12  w-100 sm:w-8/12 mx-auto ">
        <Paragraph
          headerText={t('AboutPage.AboutTitle')}
          paragraphText={t('AboutPage.AboutDecs')}
          headerFlag
          paragraphFlag
        />
      </div>
      <div className=" flex justify-center items-stretch flex-wrap pb-8 sm:pb-12 md:pb-20">
        <div className=" sm:w-8/12 md:w-6/12 xl:w-5/12 mt-12 ">
          <div className=" h-full w-10/12 lg:w-3/4 xl:w-1/2 shadow-lg border-1 border-gray-300  mx-auto">
            <Card
              cardImage={bloodplus}
              cardTitle={t('AboutPage.CardOneTitle')}
              cardDesc={t('AboutPage.CardOneDecs')}
              orientationText="center"
            />
          </div>
        </div>
        <div className=" sm:w-8/12 md:w-6/12 xl:w-5/12 mt-12 ">
          <div className=" h-full w-10/12  lg:w-3/4 xl:w-1/2 shadow-lg border-1 border-gray-300  mx-auto">
            <Card
              cardImage={globalhealth}
              cardTitle={t('AboutPage.CardTwoTitle')}
              cardDesc={t('AboutPage.CardTwoDecs')}
              orientationText="center"
            />
          </div>
        </div>
        <div className=" sm:w-8/12 md:w-6/12 xl:w-5/12 mt-12 ">
          <div className=" h-full w-10/12  lg:w-3/4 xl:w-1/2 shadow-lg border-1 border-gray-300  mx-auto">
            <Card
              cardImage={free}
              cardTitle={t('AboutPage.CardThreeTitle')}
              cardDesc={t('AboutPage.CardThreeDecs')}
              orientationText="center"
            />
          </div>
        </div>
        <div className=" sm:w-8/12 md:w-6/12 xl:w-5/12 mt-12 ">
          <div className=" h-full w-10/12  lg:w-3/4 xl:w-1/2 shadow-lg border-1 border-gray-300  mx-auto">
            <Card
              cardImage={save}
              cardTitle={t('AboutPage.CardFourTitle')}
              cardDesc={t('AboutPage.CardFourDecs')}
              orientationText="center"
            />
          </div>
        </div>
      </div>
      <div className=" p-8">
        <div className="px-6 sm:px-0 w-100 sm:w-8/12 mx-auto ">
          <Paragraph
            headerText={t('AboutPage.ContectTitle')}
            paragraphText={t('AboutPage.ContectDecs')}
            headerFlag
            paragraphFlag
          />
        </div>
        <div className="md:w-100 xl:w-10/12 mx-auto ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
export default About;
