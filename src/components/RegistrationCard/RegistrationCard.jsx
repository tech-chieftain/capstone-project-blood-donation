import React from 'react';
import { PropTypes } from 'prop-types';

function RegistrationCard({ icon, title, description }) {
  return (
    <div className="flex flex-col p-6 m-6 bg-gray-100 rounded md:flex-row">
      {/* icon place */} {/* icon will be on svg tag */}
      <div className="flex-none w-16 h-16 mx-auto border-4 border-gray-500 rounded-full md:h-24 md:w-24  md:mr-4 sm:border-6 ">
        <img src={icon} alt="icon" />
      </div>
      <div className="flex-1 my-6 mr-4 sm:mr-4">
        {/* title place */}
        <span className="text-base font-semibold text-primary-100 sm:text-lg lg:text-xl">
          {title} -{' '}
        </span>
        {/* description place */}
        <span className="text-sm  sm:text-base lg:text-lg">{description}</span>{' '}
      </div>
    </div>
  );
}

RegistrationCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default RegistrationCard;
