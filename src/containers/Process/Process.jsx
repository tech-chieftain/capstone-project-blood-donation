import React from 'react';
import { useTranslation } from 'react-i18next';
import Paragraph from '../../components/Paragraph/Paragraph';
import processImage from '../../components/images/centerImageProcess.png';
import Hero from '../../components/Hero/Hero';
import heroImage from '../../components/images/Man-Smiling-Donating-Blood.png';
import InstructionCard from '../../components/InstructionCard/InstructionCard';

function Process() {
  const { t } = useTranslation();
  const CardPosition = {
    cardStyle: ` mx-4 my-4`,
  };
  return (
    <div>
      <div>
        <Hero className="relative w-full h-full" img={heroImage}>
          <div className="absolute bottom-0 left-0 w-auto ml-6 mr-6 text-lg font-bold text-white sm:w-full md:w-3/4 lg:w-2/4 xl:w-2/4 sm:text-xl md:text-2xl">
            {t('Process.titlePrograph')}
          </div>
        </Hero>
      </div>

      <div className="mt-6">
        {' '}
        <Paragraph
          headerText={t('Process.titleInstructionCard')}
          paragraphText={t('Process.descTitleprog')}
          headerFlag
          paragraphFlag
        />
      </div>

      <div>
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div>
            <div className={CardPosition.cardStyle}>
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.age')}
                description={t('Process.descAge')}
                directionFlag="true"
              />
            </div>
            <div className={CardPosition.cardStyle}>
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.weight')}
                description={t('Process.weightdesc')}
                directionFlag="true"
              />
            </div>
            <div className={CardPosition.cardStyle}>
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.generalhealth')}
                description={t('Process.general_health_desc')}
                directionFlag="true"
              />
            </div>
          </div>

          <div className="hidden w-auto sm: md: lg:flex xl:flex ">
            <img src={processImage} alt="hel" />
          </div>

          <div>
            <div className={CardPosition.cardStyle}>
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.eat')}
                description={t('Process.eat_desc')}
                // directionFlag="false"
              />
            </div>
            <div className={CardPosition.cardStyle}>
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.drink')}
                description={t('Process.drinkdesc')}
                // directionFlag="false"
              />
            </div>
            <div className={CardPosition.cardStyle}>
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.wait')}
                description={t('Process.waitdesc')}
                // directionFlag="false"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 my-6">
        <h1 className="pt-1 font-semibold text-center text-primary-100 sm:text-xl md:text-2xl lg:text-3xl">
          {t('Process.title_blood_donation')}
        </h1>
        <h1 className="pt-1 font-semibold text-center text-black sm:text-xl md:text-2xl lg:text-3xll">
          {t('Process.secondtitle_blood_donation')}
        </h1>
        <p className="text-center sm:text-sm md:text-base lg:text-lg">
          {' '}
          {t('Process.blood_donation_desc')}
        </p>
      </div>
    </div>
  );
}

export default Process;
