/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { PropTypes } from 'prop-types';

function Donateparagraph({ text }) {
  return (
    <div className="text-sm sm:text-base md:text-lg  mb-10 leading-relaxed w-10/12">{text}</div>
  );
}

Donateparagraph.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Donateparagraph;
