import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import HeaderPharagrph from '../Paragraph';
import SubHeader from '../SubHeader';
import Donateparagraph from '../Donateparagraph';
import Progress from '../Progress';
import InputField from '../InputField';
import donate from './images/donate.svg';

function ThirdStep({ donor, onChange, setStep, onRegister }) {
  const [errorname, setErrorname] = useState(false);
  const [erroremail, seterroremail] = useState(false);
  const [errorphone, setErrorphone] = useState(false);
  const { t } = useTranslation();
  const [agree, setAgree] = useState(false);
  const onClickNext = () => {
    const mailformat = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    if (donor.name !== '' && mailformat.test(donor.email) && donor.phone !== '' && agree) {
      onRegister();
    }
    if (donor.name === '') {
      setErrorname(true);
    } else {
      setErrorname(false);
    }
    if (!mailformat.test(donor.email)) {
      seterroremail(true);
    } else {
      seterroremail(false);
    }
    if (donor.phone === '') {
      setErrorphone(true);
    } else {
      setErrorphone(false);
    }
  };
  const onClickPrevious = () => {
    setStep(2);
  };
  return (
    <div>
      <div className=" w-11/12 xl:w-10/12 mb-6 sm:mb-8 md:mb-12">
        <HeaderPharagrph
          headerText={t('donate_third_page.title')}
          headerFlag={false}
          paragraphText={t('donate_third_page.paragrph')}
          paragraphFlag={false}
        />
      </div>
      <div className="p-6 sm:p-8 md:p-10 border-gray-300 shadow-xl border-2 rounded">
        <Progress steps={3} />
        <SubHeader text={t('donate_third_page.subHeader1')} />
        <Donateparagraph text={t('donate_third_page.subparagrph')} />
        <div className="flex items-start ">
          <div className="w-9/12 md:flex-1 ">
            <SubHeader text={t('donate_first_page.subHeader2')} />
            <div>
              <InputField
                labelText={t('donate_third_page.name')}
                placeholder={t('donate_third_page.name_placeholder')}
                onChange={onChange}
                inputValue={donor.name}
                inputName="name"
                Inputtype="text"
              />
            </div>
            <div className="mb-8 md:mb-16 text-red-600">
              {errorname ? t('donate_third_page.errorName') : ''}
            </div>
            <div>
              <InputField
                labelText={t('donate_third_page.phone')}
                placeholder={t('donate_third_page.phone_placeholder')}
                onChange={onChange}
                inputValue={donor.phone}
                inputName="phone"
                Inputtype="number"
              />
            </div>
            <div className="mb-8 md:mb-16 text:sm text-red-600">
              {errorphone ? t('donate_third_page.errorPhone') : ''}
            </div>
            <div>
              <InputField
                labelText={t('donate_third_page.email')}
                placeholder={t('donate_third_page.email_placeholder')}
                onChange={onChange}
                inputValue={donor.email}
                inputName="email"
                Inputtype="email"
              />
            </div>
            <div className="mb-8 md:mb-16 text:sm text-red-600">
              {erroremail ? t('donate_third_page.errorEmail') : ''}
            </div>
            <div>
              <label htmlFor="check" className="inline-flex items-start">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 "
                  name="agree"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span className="mx-2 text-sm sm:text-base ">
                  {t('donate_third_page.agree')}{' '}
                  <a
                    href="/Terms"
                    target="_blank"
                    className="border-b-2  border-primary text-sm sm:text-base  text:sm text-primary"
                  >
                    {t('donate_third_page.terms')}
                  </a>
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
          <div className="mx-4 sm:mx-8 text-center">
            <Button
              text={t('donate_third_page.button_previous')}
              onclick={onClickPrevious}
              classFlag
            />
          </div>
          <div>
            <Button
              text={t('donate_third_page.button_next')}
              onclick={onClickNext}
              classFlag={false}
            />
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
