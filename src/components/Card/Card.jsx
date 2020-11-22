import React from 'react';
import { PropTypes } from 'prop-types';

function Card({ cardImage, cardTitle, cardDesc, orientationText }) {
  const classesObjectStyles = {
    cardTitle: `text-primary-100 text-lg sm:text-xl md:text-2xl font-bold my-3 text-${orientationText}`,
    cardParagraph: `text-sm sm:text-base md:text-lg  text-${orientationText}`,
  };
  return (
    <div className="rounded">
      <div className="flex justify-center">
        <img className="w-16 h-12 sm:w-20 sm:h-16" src={cardImage} alt="icon" />
      </div>

      <div className="px-6 py-0 pb-6 my-5">
        <div className={classesObjectStyles.cardTitle}>{cardTitle}</div>
        <p className={classesObjectStyles.cardParagraph}>{cardDesc}</p>
      </div>
    </div>
  );
}
Card.propTypes = {
  cardImage: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDesc: PropTypes.string.isRequired,
  orientationText: PropTypes.string,
};
export default Card;
