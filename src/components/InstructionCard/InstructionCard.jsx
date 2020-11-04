import React from 'react';
import { PropTypes } from 'prop-types';

function InstructionCard({ image, title, description, directionFlag }) {
  // if directionFlag set to true the left direction of Instruction Card will retune
  if (directionFlag) {
    return (
      <div className="flex bg-white h-auto shadow-xl rounded w-full items-center p-4 md:p-6">
        <div className="flex-none h-16 w-16 md:h-20 md:w-20 rounded-full m-auto mr-2 sm:mr-4  bg-gray-200">
          <img className="h-16 w-16 md:h-20 md:w-20 object-contain" src={image} alt="img" />
        </div>
        <div className="flex-1 mr-4 sm:mr-4">
          <p className="text-primary-100 text-lg sm:text-xl md:text-2xl font-bold">{title}</p>
          <p className="text-black text-sm sm:text-base md:text-lg tracking-wide leading-normal">
            {description}
          </p>
        </div>
      </div>
    );
  }
  // if directionFlag set to false the right  direction of Instruction Card will retune
  return (
    // if show on mobile  the Instruction Card will go from right to left
    <div className="flex sm:flex-row-reverse bg-white h-auto shadow-xl rounded w-full items-center p-4 md:p-6">
      <div className="flex-none h-16 w-16 md:h-20 md:w-20 rounded-full m-auto mr-2 bg-gray-200">
        <img className="h-16 w-16 md:h-20 md:w-20 object-contain" src={image} alt="img" />
      </div>
      <div className="flex-1 text-left sm:text-right mr-4 sm:mr-4">
        <p className="text-primary-100 text-lg sm:text-xl md:text-2xl font-bold">{title}</p>
        <p className="text-black text-sm sm:text-base md:text-lg tracking-wide leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
InstructionCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  directionFlag: PropTypes.bool.isRequired,
};
export default InstructionCard;
