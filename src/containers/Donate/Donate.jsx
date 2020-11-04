import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addDonor } from '../../Utilities/FirebaseUtilities';
import FirstStep from '../../components/FirstStep';
import SecondStep from '../../components/SecondStep';
import ThirdStep from '../../components/ThirdStep';
import FourthStep from '../../components/FourthStep';

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
  const { t, i18n } = useTranslation();
  const [donor, setDonor] = useState(data);
  const [step, setstep] = useState(1);
  const [city, setcity] = useState('');
  const onChangeHandling = (e) => {
    const { name, value } = e.target;
    // if the languge is arabic and the name is of the property is city then take the arabic word
    if (i18n.language === 'ar' && name === 'city') {
      const cities = t('cities', { returnObjects: true });
      const index = cities.indexOf(value);
      const citiesEnglish = t('cities', { lng: 'en', returnObjects: true });
      setDonor({
        ...donor,
        [name]: citiesEnglish[index],
      });
    } else {
      setDonor({
        ...donor,
        [name]: value,
      });
    }
    setcity(value);
  };
  const onClickHandling = () => {
    addDonor(donor);
    setstep(4);
  };
  const chooseBlood = (value) => {
    setDonor({
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
          city={city}
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
      {step === 4 ? <FourthStep /> : null}
    </div>
  );
}

export default Donate;
