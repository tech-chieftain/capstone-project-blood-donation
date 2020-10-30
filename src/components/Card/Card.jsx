import React from 'react';
import { PropTypes } from 'prop-types';

function Card({ cardImage, cardTitle, cardDesc, orientationText }) {
  const classesObjectStyles = {
    cardTitle: `text-primary-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-3 text-${orientationText}`,
    cardParagraph: `text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-${orientationText}`,
  };
  return (
    <div className="max-w-3xl my-5 ml-6 mr-6 bg-gray-200 rounded sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
      <div className="flex justify-center">
        <img className="w-1/3 h-1/3" src={cardImage} alt="icon" />
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
