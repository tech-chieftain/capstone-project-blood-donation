import React from 'react';
import { PropTypes } from 'prop-types';

function Card({ cardImage, cardTitle, cardDesc }) {
  const classesObjectStyles = {
    // cardProperties:'bg-gray-200 max-w-sm my-5  shadow-lg ml-8 mt-15 border rounded',
    cardImagediv: 'w-32 mt-0 ml-20 mb-0',
    // cardimageProperties: 'h-full w-full',
    cardTitle: 'text-orange-800 text-lg font-bold text-xl mb-2',
    cardParagraph: 'text-gray-700 text-lg',
  };
  return (
    <div>
      <div className="Card">
        <div className="max-w-sm my-5 ml-8 bg-gray-200 border rounded shadow-lg mt-15">
          <div className={classesObjectStyles.cardImagediv}>
            <img className="w-full h-full" src={cardImage} alt="icon" />
          </div>

          <div className="px-6 py-0 pb-1 my-5">
            <div className={classesObjectStyles.cardTitle}>{cardTitle}</div>
            <p className={classesObjectStyles.cardParagraph}>{cardDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  cardImage: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  cardDesc: PropTypes.string.isRequired,
};
export default Card;
