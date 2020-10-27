import React, { useState } from 'react';
import InputFiled from '../InputField';
import Button from '../Button';

const Form = () => {
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
    console.log(form);
  };
  return (
    <form className="shadow-xl w-10/12 lg:w-8/12 mx-auto  flex flex-col mt-6 p-6 sm:p-8 md:p-12">
      <div className="flex flex-col md:flex-row mb-8">
        <InputFiled
          placeholder="Name"
          onChange={onChangeHandling}
          inputValue={form.name}
          inputName="name"
          Inputtype="text"
        />
        <InputFiled
          placeholder="Email"
          onChange={onChangeHandling}
          inputValue={form.email}
          inputName="email"
          Inputtype="email"
        />
      </div>
      <textarea
        className=" flex-1 mr-4 p-2 text-base tracking-normal font-semibold placeholder-gray-800 border-2 border-gray-300 focus:outline-none "
        rows="6"
        placeholder="massage"
        value={form.massege}
        name="massege"
        onChange={onChangeHandling}
      />
      <div className="self-center">
        <Button text="Send" onclick={onClickHandling} classFlag={false} />
      </div>
    </form>
  );
};

export default Form;
