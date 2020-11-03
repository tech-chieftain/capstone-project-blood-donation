import React from 'react';
import { PropTypes } from 'prop-types';

function InputSelect({ donor, text, onChange, name, options }) {
  return (
    <div className="mb-4 sm:mb-6">
      <label htmlFor="nowhere" className="block">
        <div className="text-sm sm:text-base md:text-lg font-medium inline-block mb-4 sm:mb-6">
          {text}
        </div>
        <select
          className="form-select block w-full border-gray-300 border-2 py-2 px-4 text-sm sm:text-base md:text-lg "
          value={donor[name]}
          name={name}
          onChange={onChange}
          onBlur={onChange}
        >
          {options.map((ele) => (
            <option key={ele}>{ele}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

InputSelect.propTypes = {
  donor: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputSelect;
