import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button';
import HeaderPharagrph from '../Paragraph';
import SubHeader from '../SubHeader';
import Donateparagraph from '../Donateparagraph';
import Progress from '../Progress';
import InputField from '../InputField';
import donate from './images/donate.svg';

function ThirdStep({ donor, onChange, setStep, onRegister }) {
  const [agree, setAgree] = useState(false);
  const onClickNext = () => {
    if (donor.name !== '' && donor.email !== '' && donor.phone !== '' && agree) {
      onRegister();
    }
  };
  const onClickPrevious = () => {
    setStep(2);
  };
  return (
    <div>
      <div className=" w-11/12 xl:w-10/12 mb-6 sm:mb-8 md:mb-12">
        <HeaderPharagrph
          headerText="We needs people like you."
          headerFlag={false}
          paragraphText="Male donors are particularly needed because they can donate more frequently and have higher iron levels."
          paragraphFlag={false}
        />
      </div>
      <div className="p-6 sm:p-8 md:p-10 border-gray-300 shadow-xl border-2 rounded">
        <Progress steps={3} />
        <SubHeader text="Personal Information" />
        <Donateparagraph text="We just need a little more information about you, to help us finish this stage and contact you about the next steps." />
        <div className="flex items-start ">
          <div className="w-9/12 md:flex-1 ">
            <SubHeader text="All fields marked with * are required" />
            <div className="mb-8 md:mb-16">
              <InputField
                labelText="Name*"
                placeholder="Enter your name"
                onChange={onChange}
                inputValue={donor.name}
                inputName="name"
                Inputtype="text"
              />
            </div>
            <div className="mb-8 md:mb-16">
              <InputField
                labelText="Phone *"
                placeholder="Enter your phone numbre"
                onChange={onChange}
                inputValue={donor.phone}
                inputName="phone"
                Inputtype="number"
              />
            </div>
            <div className="mb-8  md:mb-16">
              <InputField
                labelText="Email*"
                placeholder="Enter your email"
                onChange={onChange}
                inputValue={donor.email}
                inputName="email"
                Inputtype="email"
              />
            </div>
            <div>
              <label htmlFor="check" className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 "
                  name="agree"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span className="ml-2 text-sm sm:text-base md:text-lg">
                  agree to be there on these conditions
                </span>
              </label>
            </div>
          </div>
          <div className="hidden md:block md:flex-1 shadow-sm">
            <img
              className="w-10/12 mx-auto object-contain"
              style={{ height: '600px' }}
              src={donate}
              alt="donate"
            />
          </div>
        </div>

        <div className="flex  mb-8">
          <div className="mr-4 sm:mr-8 text-center">
            <Button text="previous" onclick={onClickPrevious} classFlag />
          </div>
          <div>
            <Button text="Register" onclick={onClickNext} classFlag={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
ThirdStep.propTypes = {
  donor: PropTypes.object.isRequired,
  setStep: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};
export default ThirdStep;
