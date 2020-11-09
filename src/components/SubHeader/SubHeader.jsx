/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { PropTypes } from 'prop-types';

function SubHeader({ text }) {
  return <div className="text-base md:text-lg lg:text-xl font-medium mb-6">{text}</div>;
}

SubHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
export default SubHeader;
