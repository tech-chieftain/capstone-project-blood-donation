import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button';

function ReadytoDonate({ header, text }) {
  return (
    <div className="bg-white ">
      <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        {header}
      </div>
      <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">{text}</div>
      <div>
        <Button text="Donate" onclick />
      </div>
    </div>
  );
}

ReadytoDonate.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default ReadytoDonate;
