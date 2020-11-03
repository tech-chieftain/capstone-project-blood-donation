import React, { useState } from 'react';
import FirstStep from '../../components/FirstStep';
import SecondStep from '../../components/SecondStep';
import ThirdStep from '../../components/ThirdStep';

function Donate() {
  const data = {
    name: '',
    email: '',
    phone: '',
    date: '',
    weight: '',
    sickness: '',
    bloodType: '',
    gender: '',
    city: '',
  };
  const [donor, setDonoe] = useState(data);
  const [step, setstep] = useState(1);
  const onChangeHandling = (e) => {
    const { name, value } = e.target;
    setDonoe({
      ...donor,
      [name]: value,
    });
  };
  const onClickHandling = () => {
    console.log(donor);
  };
  const chooseBlood = (value) => {
    setDonoe({
      ...donor,
      bloodType: value,
    });
  };
  return (
    <div className=" py-16 sm:py-20 md:py-24 w-11/12 sm:w-10/12 mx-auto">
      {step === 1 ? (
        <FirstStep donor={donor} onChange={onChangeHandling} setStep={setstep} />
      ) : null}
      {step === 2 ? (
        <SecondStep
          donor={donor}
          onChange={onChangeHandling}
          setStep={setstep}
          chooseBlood={chooseBlood}
        />
      ) : null}
      {step === 3 ? (
        <ThirdStep
          donor={donor}
          onChange={onChangeHandling}
          setStep={setstep}
          onRegister={onClickHandling}
        />
      ) : null}
    </div>
  );
}

export default Donate;
