/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import RadioButton from '../RadioButton';
import HeaderPharagrph from '../Paragraph';
import SubHeader from '../SubHeader';
import Donateparagraph from '../Donateparagraph';
import Progress from '../Progress';

function FirstStep({ donor, onChange, setStep }) {
  const { t } = useTranslation();
  const history = useHistory();
  const dateDiff = (date2) => {
    const dt1 = new Date(date2);
    const dt2 = new Date();
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24 * 30 * 12)
    );
  };
  const onClickHandling = () => {
    const Age = dateDiff(donor.date);
    if (
      donor.weight === t('donate_first_page.radio_option_no') ||
      donor.sickness === t('donate_first_page.radio_option_yes') ||
      Age < 18
    ) {
      history.push('/Cantdonate');
    } else if (donor.weight !== '' && donor.sickness !== '' && !Number.isNaN(Age)) {
      setStep(2);
    }
  };
  return (
    <div>
      <div className=" w-11/12 xl:w-10/12 mb-6 sm:mb-8 md:mb-12">
        <HeaderPharagrph
          headerText={t('donate_first_page.title')}
          headerFlag={false}
          paragraphText={t('donate_first_page.paragrph')}
          paragraphFlag={false}
        />
      </div>
      <div className="p-6 sm:p-8 md:p-10 border-gray-300 shadow-xl border-2 rounded">
        <Progress steps={1} />
        <SubHeader text={t('donate_first_page.subHeader1')} />
        <Donateparagraph text={t('donate_first_page.subparagrph')} />
        <SubHeader text={t('donate_first_page.subHeader2')} />
        <div className=" flex flex-col items-start mb-8">
          <label className="mb-2 tracking-normal font-medium">
            {t('donate_first_page.birth_text')}
          </label>
          <input
            id="date"
            className=" mt-4 py-2 px-4 text-sm sm:text-base tracking-normal   border-2 border-gray-300 focus:outline-none bg-white placeholder-gray-800"
            type="date"
            name="date"
            value={donor.date}
            onChange={onChange}
          />
        </div>
        <RadioButton
          donor={donor}
          onChange={onChange}
          radiotext={t('donate_first_page.radio_text1')}
          RadioOptions={[
            t('donate_first_page.radio_option_yes'),
            t('donate_first_page.radio_option_no'),
          ]}
          name="weight"
        />
        <RadioButton
          donor={donor}
          onChange={onChange}
          radiotext={t('donate_first_page.radio_text2')}
          RadioOptions={[
            t('donate_first_page.radio_option_yes'),
            t('donate_first_page.radio_option_no'),
          ]}
          name="sickness"
        />
        <Button text={t('donate_first_page.button')} onclick={onClickHandling} classFlag={false} />
      </div>
    </div>
  );
}

FirstStep.propTypes = {
  donor: PropTypes.object.isRequired,
  setStep: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default FirstStep;
