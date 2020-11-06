import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import Hero from '../../components/Hero';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import ReadytoDonate from '../../components/ReadytoDonate';
import Card from '../../components/Card';
import HeroImage from './images/HeroImage.png';
import Icon1 from './images/syringe-needle.svg';
import Icon2 from './images/face-mask.svg';
import Icon3 from './images/dizziness.svg';
import Image from './images/Bg.svg';

function Home() {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <div>
      {t('app_name')} <LanguageSwitcher />
      <Hero img={HeroImage}>
        <div className=" py-4 px-4 md:px-8 flex-col justify-between flex-wrap my-auto">
          <p className="text-white leading-normal tracking-normal text-xl md:text-4xl	">
            {t('HomePage.HeroTitle')}
          </p>
          <Button text="Donate" onclick={() => history.push('./Donate')} classFlag />
        </div>
      </Hero>
      <div className="py-4 px-4 md:px-8 flex-col justify-between">
        <Paragraph
          headerText={t('HomePage.DonateOverviewTitle')}
          paragraphText={t('HomePage.DonateOverviewDecs')}
          headerFlag
          paragraphFlag
        />
        <Paragraph
          headerText={t('HomePage.DonateProcessTitle')}
          paragraphText={t('HomePage.DonateProcessDecs')}
          headerFlag
          paragraphFlag
        />
        <Paragraph
          headerText={t('HomePage.CommonConcernTitle')}
          paragraphText={t('HomePage.CommonConcernDecs')}
          headerFlag
          paragraphFlag
        />
        <div className=" flex justify-center flex-wrap p-4 m-2 ">
          <div className="flex-auto w-full md:w-2/6 lg:w-1/4 h-auto border-2  border-gray-500 rounded p-6 m-2">
            <Card
              cardImage={Icon1}
              cardTitle={t('HomePage.CardOneTitle')}
              cardDesc={t('HomePage.CardOneDecs')}
              orientationText="center"
            />
          </div>
          <div className="flex-auto w-full md:w-2/6 lg:w-1/4 h-auto border-2  border-gray-500 rounded p-6 m-2">
            <Card
              cardImage={Icon2}
              cardTitle={t('HomePage.CardTwoTitle')}
              cardDesc={t('HomePage.CardTwoDecs')}
              orientationText="center"
            />
          </div>
          <div className="flex-auto w-full md:w-2/6 lg:w-1/4 h-auto border-2  border-gray-500 rounded p-6 m-2">
            <Card
              cardImage={Icon3}
              cardTitle={t('HomePage.CardThreeTitle')}
              cardDesc={t('HomePage.CardThreeDecs')}
              orientationText="center"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray-100 mb-4 p-4">
        <ReadytoDonate />
      </div>
      <Paragraph headerText={t('HomePage.Partners')} headerFlag />
      <div className=" flex justify-center flex-wrap p-2 m-2 ">
        <div className="flex-auto w-full md:w-2/6 lg:w-1/4 p-2 m-2">
          <Card cardImage={Image} cardDesc={t('HomePage.PartnerOne')} orientationText="center" />
        </div>
        <div className="flex-auto w-full md:w-2/6 lg:w-1/4 p-2 m-2">
          <Card cardImage={Image} cardDesc={t('HomePage.PartnerTwo')} orientationText="center" />
        </div>
        <div className="flex-auto w-full md:w-2/6 lg:w-1/4 p-2 m-2">
          <Card cardImage={Image} cardDesc={t('HomePage.PartnerThree')} orientationText="center" />
        </div>
      </div>
    </div>
  );
}

export default Home;
