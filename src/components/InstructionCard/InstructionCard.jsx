import React from 'react';
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';

function InstructionCard({ image, title, description, directionFlag }) {
  const { i18n } = useTranslation();
  // if directionFlag set to true the left direction of Instruction Card will retune
  if (directionFlag) {
    return (
      <div className="flex flex-col items-center w-full h-auto p-4 bg-white rounded shadow-xl sm:flex-row sm:h-48 md:h-56 xl:h-48 md:p-6">
        <div className="flex-none w-12 h-12 mx-px mb-4 mr-2 bg-gray-200 rounded-full sm:self-center sm:w-16 sm:h-16 sm:mb-0 md:h-20 md:w-20 sm:mr-4">
          <img
            className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:h-20 md:w-20"
            src={image}
            alt="img"
          />
        </div>
        <div className="flex-1 mx-4 ">
          <p className="mb-2 font-semibold sm:text-xl text-primary-100">{title}</p>
          <p className="text-sm leading-normal tracking-wide text-black sm:text-base md:text-lg">
            {description}
          </p>
        </div>
      </div>
    );
  }
  // if directionFlag set to false the right  direction of Instruction Card will retune
  return (
    // if show on mobile  the Instruction Card will go from right to left
    <div className="flex flex-col items-center w-full h-auto p-4 bg-white rounded shadow-xl sm:flex-row lg:flex-row-reverse sm:h-48 md:h-56 xl:h-48 md:p-6">
      <div className="flex-none w-12 h-12 mx-px mb-4 mr-2 bg-gray-200 rounded-full sm:self-center sm:w-16 sm:h-16 sm:mb-0 md:h-20 md:w-20">
        <img
          className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:h-20 md:w-20"
          src={image}
          alt="img"
        />
      </div>
      <div
        className={`flex-1 ${
          i18n.language === 'ar' ? 'text-right lg:text-left' : 'text-left lg:text-right'
        } mx-4 `}
      >
        <p className="mb-2 font-semibold sm:text-xl text-primary-100">{title}</p>
        <p className="text-sm leading-normal tracking-wide text-black sm:text-base md:text-lg">
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
