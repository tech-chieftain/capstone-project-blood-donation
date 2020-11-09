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
        <div className=" items-center mx-8 flex-wrap my-auto">
          <p className="text-white subpixel-antialiased tracking-wide text-3xl sm:text-4x md:text-6xl ">
            {t('HomePage.HeroTitle1')}
          </p>
          <p className="text-white subpixel-antialiased tracking-wide text-3xl sm:text-4x md:text-6xl ">
            {t('HomePage.HeroTitle2')}
          </p>
          <Button text={t('HomePage.donate')} onclick={() => history.push('./Donate')} classFlag />
        </div>
      </Hero>
      <div className=" bg-gray-100 py-8 sm:py-12 px-6 sm:px-0  ">
        <div className="mb-8 sm:mb-12 md:mb-16 w-100 sm:w-10/12 mx-auto ">
          <Paragraph
            headerText={t('HomePage.DonateOverviewTitle')}
            paragraphText={t('HomePage.DonateOverviewDecs')}
            headerFlag
            paragraphFlag={false}
          />
        </div>
        <div className=" w-100 sm:w-10/12 mx-auto ">
          <Paragraph
            headerText={t('HomePage.DonateProcessTitle')}
            paragraphText={t('HomePage.DonateProcessDecs')}
            headerFlag
            paragraphFlag={false}
          />
        </div>
      </div>
      <div className="px-6 sm:px-0 py-8 sm:py-12  w-100 sm:w-8/12 mx-auto ">
        <Paragraph
          headerText={t('HomePage.CommonConcernTitle')}
          paragraphText={t('HomePage.CommonConcernDecs')}
          headerFlag
          paragraphFlag
        />
      </div>
      <div className=" flex justify-around items-stretch flex-wrap pb-8 sm:pb-12 md:pb-20">
        <div className=" sm:w-8/12 md:w-6/12 xl:w-3/12 mt-12 ">
          <div className=" h-full w-3/4  xl:w-full shadow-md border-1 border-gray-300  mx-auto">
            <Card
              cardImage={Icon1}
              cardTitle={t('HomePage.CardOneTitle')}
              cardDesc={t('HomePage.CardOneDecs')}
              orientationText="center"
            />
          </div>
        </div>
        <div className="sm:w-8/12 md:w-6/12 xl:w-3/12  mt-12">
          <div className=" h-full w-3/4  xl:w-full shadow-md border-1 border-gray-300  mx-auto">
            <Card
              cardImage={Icon2}
              cardTitle={t('HomePage.CardTwoTitle')}
              cardDesc={t('HomePage.CardTwoDecs')}
              orientationText="center"
            />
          </div>
        </div>
        <div className="sm:w-8/12 md:w-6/12 xl:w-3/12  mt-12">
          <div className="h-full w-3/4  xl:w-full shadow-md border-1 border-gray-300   mx-auto">
            <Card
              cardImage={Icon3}
              cardTitle={t('HomePage.CardThreeTitle')}
              cardDesc={t('HomePage.CardThreeDecs')}
              orientationText="center"
            />
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 py-8 sm:py-12">
        <div className=" w-10/12 sm:w-9/12 md:w-6/12 mx-auto">
          <ReadytoDonate />
        </div>
      </div>
      <div className="pt-6 sm:pt-8">
        <Paragraph headerText={t('HomePage.Partners')} headerFlag />
      </div>
      <div className=" flex justify-center flex-wrap ">
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