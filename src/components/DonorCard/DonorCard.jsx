import React from 'react';
import { PropTypes } from 'prop-types';

function DonorCard({ title, cardIcon }) {
  const classesObjectStyles = {
    cardDonor: 'px-2 sm:px-4 py-2 bg-gray-200 ',
    cardIcon: 'w-6 h-6 mx-2 my-1 object-cover ',
    cardTitle: ' text-sm sm:text-base ',
  };

  return (
    <div className={classesObjectStyles.cardDonor}>
      <div className="flex items-center">
        <img className={classesObjectStyles.cardIcon} src={cardIcon} alt="icon" />
        <span className={classesObjectStyles.cardTitle}> {title} </span>
      </div>
    </div>
  );
}

DonorCard.propTypes = {
  title: PropTypes.element.isRequired,
  cardIcon: PropTypes.element,
};
export default DonorCard;
