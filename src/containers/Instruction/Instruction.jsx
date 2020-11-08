import React from 'react';
import { useTranslation } from 'react-i18next';
import Paragraph from '../../components/Paragraph/Paragraph';
import processImage from '../../components/images/centerImageProcess.png';
import Hero from '../../components/Hero/Hero';
import heroImage from '../../components/images/Man-Smiling-Donating-Blood.png';
import InstructionCard from '../../components/InstructionCard/InstructionCard';

function Instruction() {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <Hero className="flex" img={heroImage}>
          <div className="self-center ml-6 mr-6 text-lg font-bold text-white  sm:w-full md:w-3/4 lg:w-2/4 xl:w-2/4 sm:text-2xl md:text-3xl">
            {t('Process.titlePrograph')}
          </div>
        </Hero>
      </div>
      <div className="w-10/12 mx-auto my-8 lg:mb-12 sm:w-8/12">
        <Paragraph
          headerText={t('Process.titleInstructionCard')}
          paragraphText={t('Process.descTitleprog')}
          headerFlag
          paragraphFlag
        />
      </div>
      <div>
        <div className="flex flex-col items-center py-4 lg:flex-row">
          <div className="flex flex-col justify-between w-10/12 sm:w-9/12 lg:w-6/12 xl:w-4/12">
            <div className="p-4">
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.age')}
                description={t('Process.descAge')}
                directionFlag
              />
            </div>
            <div className="p-4">
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.weight')}
                description={t('Process.weightdesc')}
                directionFlag
              />
            </div>
            <div className="p-4">
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.generalhealth')}
                description={t('Process.general_health_desc')}
                directionFlag
              />
            </div>
          </div>
          <div className="hidden xl:flex xl:justify-self-center xl:items-center xl:w-4/12 ">
            <img className="object-center min-w-full min-h-full " src={processImage} alt="hel" />
          </div>
          <div className="flex flex-col justify-between w-10/12 sm:w-9/12 lg:w-6/12 xl:w-4/12">
            <div className="p-4">
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.eat')}
                description={t('Process.eat_desc')}
                directionFlag={false}
              />
            </div>
            <div className="p-4">
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.drink')}
                description={t('Process.drinkdesc')}
                directionFlag={false}
              />
            </div>
            <div className="p-4">
              <InstructionCard
                image="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
                title={t('Process.wait')}
                description={t('Process.waitdesc')}
                directionFlag={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Instruction;
