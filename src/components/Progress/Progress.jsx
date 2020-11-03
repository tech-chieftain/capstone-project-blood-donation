/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

function Prgress({ steps }) {
  const { t } = useTranslation();
  return (
    <div className="flex  items-center w-10/12  mb-10">
      <div className="text-base md:text-lg lg:text-xl font-semibold  mx-4 sm:mx-8">
        {t('donate_first_page.step')}
        {`${steps} / 3`}
      </div>
      <div className="flex-1 h-6 sm:h-8 md:h-10 bg-gray-100">
        <div className={`w-4/12 h-6 sm:h-8 md:h-10 ${steps !== 1 ? 'hidden' : ''} bg-primary`} />
        <div className={`w-8/12 h-6 sm:h-8 md:h-10 ${steps !== 2 ? 'hidden' : ''} bg-primary`} />
        <div className={`w-100 h-6 sm:h-8 md:h-10 ${steps !== 3 ? 'hidden' : ''} bg-primary`} />
      </div>
    </div>
  );
}

Prgress.propTypes = {
  steps: PropTypes.number.isRequired,
};
export default Prgress;
