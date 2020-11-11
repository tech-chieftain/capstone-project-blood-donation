import React from 'react';
import { PropTypes } from 'prop-types';

const RadioButton = ({ donor, onChange, radiotext, RadioOptions, name }) => (
  <div className="block mb-8" value={donor[name]} name={name} onChange={onChange}>
    <span className="text-sm sm:text-base md:text-lg font-medium inline-block mb-2">
      {radiotext}
    </span>
    {RadioOptions.map((option) => (
      <div key={option} className="mt-2">
        <label htmlFor="sa" className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-green-500 h-6 w-6"
            name={name}
            value={option}
            defaultChecked={donor[name] === option}
          />
          <span className="mx-4">{option}</span>
        </label>
      </div>
    ))}
  </div>
);
RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  radiotext: PropTypes.string.isRequired,
  donor: PropTypes.object.isRequired,
  RadioOptions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;
