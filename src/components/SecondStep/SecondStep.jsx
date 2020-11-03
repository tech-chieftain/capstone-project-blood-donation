import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button';
import RadioButton from '../RadioButton';
import HeaderPharagrph from '../Paragraph';
import SubHeader from '../SubHeader';
import Donateparagraph from '../Donateparagraph';
import Progress from '../Progress';
import InputSelect from '../InputSelect';

function SecondStep({ donor, onChange, setStep, chooseBlood }) {
  const onClickNext = () => {
    if (donor.city !== '' && donor.bloodType !== '') {
      setStep(3);
    }
  };
  const onClickPrevious = () => {
    setStep(1);
  };
  const bloodTypes = ['O-', 'O+', ' B-', 'B+', ' A-', 'A+', 'AB-', 'AB+'];
  const cities = [
    'Abyan',
    'Aden',
    'Al Mahrah',
    'Hadramaut',
    'Lahij',
    'Shabwah',
    'Dhale',
    'AmranAl',
    'Bayda',
    'Al HudaydahAl',
    'Jawf',
    'Al Mahwit',
    'Amanat',
    'Al Asimah',
    'Dhamar',
    'Hajjah',
    'Ibb',
    "Ma'rib",
    'Raymah',
    'Saada',
    "Sana'a",
    'Taiz',
    'Socotra',
  ];
  return (
    <div>
      <div className="text-primary-100  sm:text-xl md:text-2xl lg:text-3xl pt-1 font-semibold mb-6 ">
        Great!
      </div>
      <div className=" w-11/12 xl:w-10/12 mb-6 sm:mb-8 md:mb-12">
        <HeaderPharagrph
          headerText="It looks like you can join the community to donate."
          headerFlag={false}
          paragraphText="Please note that these eligibility questions only cover the most common reasons that people can’t give blood. Our staff will make the final checks as to whether you can donate when you attend your donation session. This ensures we keep both you and patients safe."
          paragraphFlag={false}
        />
      </div>
      <div className="p-6 sm:p-8 md:p-10 border-gray-300 shadow-xl border-2 rounded">
        <Progress steps={2} />
        <SubHeader text="Finding out more about you" />
        <Donateparagraph text="Knowing more about you is really important and helps us to prioritise when we might ask you to donate. We only collect the right amount and types of blood to meet hospital demand as we don’t want to waste your donation if it’s not needed right now." />
        <SubHeader text="All fields marked with * are required" />
        <RadioButton
          donor={donor}
          onChange={onChange}
          radiotext="1. Gender"
          RadioOptions={['Male', 'Female']}
          name="gender"
        />
        <div className="text-sm sm:text-base md:text-lg font-medium inline-block mb-4 sm:mb-6">
          2. Please select blood type (if known)?*
        </div>
        <div className="flex ml-4 flex-wrap mb-8">
          {bloodTypes.map((blood) => (
            <button
              type="button"
              key={blood}
              className=" py-2 px-2 sm:py-2 sm:px-4 lg:py-4 lg:px-8 border-2 border-gray-400 hover:bg-primary hover:text-white hover:border-primary visited:text-gray-100 text-sm sm:textt-base md:text-lg"
              onClick={() => chooseBlood(blood)}
            >
              {blood}
            </button>
          ))}
        </div>
        <div className="w-8/12 sm:w-6/12 lg:w-4/12">
          <InputSelect
            donor={donor}
            onChange={onChange}
            name="city"
            text="3. Please select your city ?*"
            options={cities}
          />
        </div>
        <div className="flex  mb-8">
          <div className="mr-4 sm:mr-8 text-center">
            <Button text="previous" onclick={onClickPrevious} classFlag />
          </div>
          <div>
            <Button text="Next" onclick={onClickNext} classFlag={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
SecondStep.propTypes = {
  donor: PropTypes.object.isRequired,
  setStep: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  chooseBlood: PropTypes.func.isRequired,
};
export default SecondStep;
