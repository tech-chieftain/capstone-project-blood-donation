import React from 'react';
import {  } from 'prop-types';

function Card({ cardImage, cardTitle, cardDesc }) {
  const classesObjectStyles = {
    cardProperties: 'bg-gray-200 max-w-sm my-5  shadow-lg ml-8 mt-15 border rounded',
    cardImagediv: 'w-32 mt-0 ml-32 lg:h',
    cardimageProperties: 'h-full w-full',
    cardTitle: 'text-orange-800 text-lg font-bold text-xl mb-2',
    cardParagraph: 'text-gray-700 text-lg',
  };

  return (
    <div>
      <div className="Card">
        <div data-testid="cardImage" className={classesObjectStyles.cardProperties}>
         <div className={classesObjectStyles.cardImagediv}> 
            <img
              className={classesObjectStyles.cardimageProperties}
              src={cardImage}
              alt="image"
            />
         </div>

          <div className="px-6 py-0 pb-1">
            <div data-testid="cardTitle" className={classesObjectStyles.cardTitle}>
              {cardTitle}
            </div>
            <p data-testid="cardDesc" className={classesObjectStyles.cardParagraph}>
              {cardDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
