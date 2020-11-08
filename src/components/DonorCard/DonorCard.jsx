import React from 'react';
import { PropTypes } from 'prop-types';

function DonorCard({ title, cardIcon }) {
  const classesObjectStyles = {
    cardDonor: 'max-w-sm px-1  bg-gray-200 sm:w-full',
    cardIcon: 'w-6 h-6 px-1 my-3 mr-2',
    cardTitle: 'pt-3 text-lg sm:text-2xl md:text-2xl font-bold',
  };

  return (
    <div className={classesObjectStyles.cardDonor}>
      <div className="flex">
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
