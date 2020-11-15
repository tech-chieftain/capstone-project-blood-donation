import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputFiled from '../InputField';
import Button from '../Button';

const ContactForm = () => {
  const { t } = useTranslation();
  const data = {
    name: '',
    email: '',
    massege: '',
  };
  const [form, setForm] = useState(data);

  const onChangeHandling = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onClickHandling = (event) => {
    event.preventDefault();
  };
  return (
    <form className="md:shadow-xl w-10/12 lg:w-8/12 mx-auto  flex flex-col  p-2 sm:p-4 md:p-8 bg-white">
      <div className="flex flex-col md:flex-row mb-8">
        <InputFiled
          placeholder={t('AboutPage.ContectName')}
          onChange={onChangeHandling}
          inputValue={form.name}
          inputName="name"
          Inputtype="text"
        />
        <InputFiled
          placeholder={t('AboutPage.ContectEmail')}
          onChange={onChangeHandling}
          inputValue={form.email}
          inputName="email"
          Inputtype="email"
        />
      </div>
      <textarea
        className=" flex-1 mr-4 p-2 text-base tracking-normal  placeholder-gray-500 border-2 border-gray-300 focus:outline-none "
        rows="6"
        placeholder={t('AboutPage.ContectMessage')}
        value={form.massege}
        name="massege"
        onChange={onChangeHandling}
      />
      <div className="self-center">
        <Button text={t('AboutPage.ContectSend')} onclick={onClickHandling} classFlag={false} />
      </div>
    </form>
  );
};

export default ContactForm;
