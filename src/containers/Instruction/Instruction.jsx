import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Paragraph from '../../components/Paragraph/Paragraph';
import processImage from '../../components/images/instructionimage/centerImageProcess.svg';
import Hero from '../../components/Hero/Hero';
import heroImage from '../../components/images/instructionimage/Man-Smiling-Donating-Blood.svg';
import one from '../../components/images/instructionimage/numbers/one.svg';
import tow from '../../components/images/instructionimage/numbers/tow.svg';
import three from '../../components/images/instructionimage/numbers/three.svg';
import four from '../../components/images/instructionimage/numbers/four.svg';
import five from '../../components/images/instructionimage/numbers/five.svg';
import six from '../../components/images/instructionimage/numbers/six.svg';
import InstructionCard from '../../components/InstructionCard/InstructionCard';

function Instruction() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>LifeVessel - Instructions</title>
      </Helmet>
      <div>
        <Hero className="flex" img={heroImage}>
          <div className="self-center ml-6 mr-6 text-white subpixel-antialiased tracking-wide text-2xl sm:text-3x md:text-4xl sm:w-full md:w-3/4 lg:w-2/4 xl:w-2/4 sm:text-2xl ">
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
        <div className="flex flex-col items-center pb-6 lg:flex-row">
          <div className="flex flex-col justify-between w-10/12 sm:w-9/12 lg:w-6/12 xl:w-4/12">
            <div className="p-4">
              <InstructionCard
                image={one}
                title={t('Process.age')}
                description={t('Process.descAge')}
                directionFlag
              />
            </div>
            <div className="p-4">
              <InstructionCard
                image={tow}
                title={t('Process.weight')}
                description={t('Process.weightdesc')}
                directionFlag
              />
            </div>
            <div className="p-4">
              <InstructionCard
                image={three}
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
                image={four}
                title={t('Process.eat')}
                description={t('Process.eat_desc')}
                directionFlag={false}
              />
            </div>
            <div className="p-4">
              <InstructionCard
                image={five}
                title={t('Process.drink')}
                description={t('Process.drinkdesc')}
                directionFlag={false}
              />
            </div>
            <div className="p-4">
              <InstructionCard
                image={six}
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
