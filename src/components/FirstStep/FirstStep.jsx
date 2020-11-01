/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button';
import RadioButton from '../RadioButton';
import HeaderPharagrph from '../Paragraph';
import SubHeader from '../SubHeader';
import Donateparagraph from '../Donateparagraph';
import Prgress from '../Prgress';

function FirstStep({ donor, onChange, setStep }) {
  const dateDiff = function (date2) {
    const dt1 = new Date(date2);
    const dt2 = new Date();
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24 * 30 * 12)
    );
  };
  const onClickHandling = () => {
    const birthday = dateDiff(donor.date);
    console.log(donor);
    console.log(birthday);
    if (donor.weight === 'Yes' || donor.sickness === 'Yes' || birthday < 18) {
      setStep(4);
    } else if (donor.weight !== '' || donor.sickness !== '') {
      setStep(2);
    }
  };
  return (
    <div>
      <div className=" w-11/12 xl:w-10/12 mb-6 sm:mb-8 md:mb-12">
        <HeaderPharagrph
          headerText="Register your interest in becoming a blood donor."
          headerFlag={false}
          paragraphText="Thank you for your interest in saving lives and donating blood. You will be joining a community of blood donors who are called upon when needed by the NHS. We need 5,000 blood donations every day."
          paragraphFlag={false}
        />
      </div>
      <div className="p-6 sm:p-8 md:p-10 border-gray-300 shadow-xl border-2 rounded">
        <Prgress steps={1} />
        <SubHeader text="A few questions before we get started" />
        <Donateparagraph
          text="A few quick questions up front to find out if you can donate blood or not. If you can't
          donate, don't worry you can help the NHS in other ways."
        />
        <SubHeader text="All fields marked with * are required" />
        <div className=" flex flex-col items-start mb-8">
          <label className="mb-2 tracking-normal font-medium">1 . Date of birth*</label>
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
          radiotext="2 . Do you weigh less than 50kg (7 stone 12lbs)?*"
          RadioOptions={['Yes', 'No']}
          name="weight"
        />
        <RadioButton
          donor={donor}
          onChange={onChange}
          radiotext="3 . Have you ever had a cancer other than basal cell carcinoma or cervical carcinoma insitu (CIN)?*"
          RadioOptions={['Yes', 'No']}
          name="sickness"
        />
        <Button text="Next" onclick={onClickHandling} classFlag={false} />
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
