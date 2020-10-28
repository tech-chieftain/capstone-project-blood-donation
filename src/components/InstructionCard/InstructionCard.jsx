import React from 'react';
import { PropTypes } from 'prop-types';

function InstructionCard({ image, title, description, directionFlag }) {
  // if directionFlag set to true the left direction of Instruction Card will retune
  if (directionFlag) {
    return (
      <div className="flex bg-white h-40 sm:h-48 shadow-2xl rounded w-full m-2 p-2">
        <div className="flex-none h-16 w-16 md:h-24 md:w-24 rounded-full m-auto mr-2 sm:mr-4  bg-gray-200">
          <img src={image} alt="img" />
        </div>
        <div className="flex-1 my-6 mr-4 sm:mr-4">
          <p className="text-primary-100 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            {title}
          </p>
          <p className="text-black text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {description}
          </p>
        </div>
      </div>
    );
  }
  // if directionFlag set to false the right  direction of Instruction Card will retune
  return (
    // if show on mobile  the Instruction Card will go from right to left
    <div className="flex sm:flex-row-reverse bg-white h-40 sm:h-48 shadow-2xl rounded w-full m-2 p-2">
      <div className="flex-none h-16 w-16 md:h-24 md:w-24 rounded-full m-auto mr-2 sm:mr-4  bg-gray-200">
        <img src={image} alt="img" />
      </div>
      <div className="flex-1 my-6 mr-4 text-left sm:text-right sm:mr-4">
        <p className="text-primary-100 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          {title}
        </p>
        <p className="text-black text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          {description}
        </p>
      </div>
    </div>
  );
}
InstructionCard.propTypes = {
  image: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  directionFlag: PropTypes.bool.isRequired,
};
export default InstructionCard;
