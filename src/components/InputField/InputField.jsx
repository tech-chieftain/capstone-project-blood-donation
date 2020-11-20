import React from 'react';
import { PropTypes } from 'prop-types';

function InputForm({ labelText, placeholder, onChange, inputValue, Inputtype, inputName }) {
  return (
    <div className="flex-1 flex flex-col  mb-4 ">
      <label htmlFor={inputName} className="flex-1 mb-2 text-sm sm:text-base font-semibold">
        {labelText}
      </label>
      <input
        className="flex-1  mr-4 p-2 text-sm sm:text-base tracking-normal  border-2 border-gray-300 focus:outline-none hover:border-primary-100 transition duration-500 focus:placeholder-transparent  bg-white placeholder-gray-500"
        placeholder={placeholder}
        type={Inputtype}
        name={inputName}
        value={inputValue}
        onChange={onChange}
        id={inputName}
        autoComplete="off"
      />
    </div>
  );
}

InputForm.propTypes = {
  labelText: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  Inputtype: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputForm;
