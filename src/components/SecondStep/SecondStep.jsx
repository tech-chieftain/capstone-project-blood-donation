import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import RadioButton from '../RadioButton';
import HeaderPharagrph from '../Paragraph';
import SubHeader from '../SubHeader';
import Donateparagraph from '../Donateparagraph';
import Progress from '../Progress';
import InputSelect from '../InputSelect';

function SecondStep({ donor, onChange, setStep, chooseBlood, city }) {
  const [errorcity, setErrorcity] = useState(false);
  const [errorblood, seterrorblood] = useState(false);
  const { t } = useTranslation();
  const onClickNext = () => {
    if (donor.city !== '' && donor.bloodType !== '') {
      setStep(3);
    }
    if (donor.city === '') {
      setErrorcity(true);
    } else {
      setErrorcity(false);
    }
    if (donor.bloodType === '') {
      seterrorblood(true);
    } else {
      seterrorblood(false);
    }
  };
  const onClickPrevious = () => {
    setStep(1);
  };
  const bloodTypes = Array.from(t('bloodTypes', { returnObjects: true }));
  const cities = Array.from(t('cities', { returnObjects: true }));
  return (
    <div>
      <div className="text-primary-100  sm:text-xl md:text-2xl lg:text-3xl pt-1 font-semibold mb-6 ">
        {t('donate_second_page.great')}
      </div>
      <div className=" w-11/12 xl:w-10/12 mb-6 sm:mb-8 md:mb-12">
        <HeaderPharagrph
          headerText={t('donate_second_page.title')}
          headerFlag={false}
          paragraphText={t('donate_second_page.paragrph')}
          paragraphFlag={false}
        />
      </div>
      <div className="p-6 sm:p-8 md:p-10 border-gray-300 shadow-xl border-2 rounded">
        <Progress steps={2} />
        <SubHeader text={t('donate_second_page.subHeader1')} />
        <Donateparagraph text={t('donate_second_page.subparagrph')} />
        <SubHeader text={t('donate_second_page.subHeader2')} />
        <RadioButton
          donor={donor}
          onChange={onChange}
          radiotext={t('donate_second_page.male_text')}
          RadioOptions={[
            t('donate_second_page.option_male'),
            t('donate_second_page.option_female'),
          ]}
          name="gender"
        />
        <div className="text-sm sm:text-base md:text-lg font-medium inline-block mb-4 sm:mb-6">
          {t('donate_second_page.blood_type_text')}
        </div>
        <div className="flex ml-4 flex-wrap">
          {bloodTypes.map((blood) => (
            <button
              type="button"
              key={blood}
              className={`${
                donor.bloodType === blood ? 'bg-primary text-white' : ''
              } py-2 px-2 sm:py-2 sm:px-4 lg:py-4 lg:px-8 border-2 rounded-none border-gray-400 hover:bg-primary hover:text-white hover:border-primary text-sm sm:textt-base md:text-lg`}
              onClick={() => chooseBlood(blood)}
            >
              {blood}
            </button>
          ))}
        </div>
        <div className="mb-8 text:sm text-red-600">
          {errorblood ? t('donate_second_page.errorBlood') : ''}
        </div>
        <div className="w-8/12 sm:w-6/12 lg:w-4/12">
          <InputSelect
            city={city}
            onChange={onChange}
            name="city"
            text={t('donate_second_page.city')}
            options={cities}
            classflag={false}
          />
        </div>
        <div className="mb-8 text:sm text-red-600">
          {errorcity ? t('donate_second_page.errorCity') : ''}
        </div>
        <div className="flex button_flex items-center mb-8">
          <div className="mx-4 sm:mx-8 text-center">
            <Button
              text={t('donate_second_page.button_previous')}
              onclick={onClickPrevious}
              classFlag
            />
          </div>
          <div>
            <Button
              text={t('donate_second_page.button_next')}
              onclick={onClickNext}
              classFlag={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
SecondStep.propTypes = {
  donor: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  chooseBlood: PropTypes.func.isRequired,
};
export default SecondStep;
