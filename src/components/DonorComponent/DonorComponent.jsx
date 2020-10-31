import React from 'react';
import { PropTypes } from 'prop-types';
import name from '../images/name.png';
import bloodType from '../images/blood_type.png';
import phone from '../images/phone.png';
import addresIco from '../images/location.png';

function DonorComponent({ donorName, blodType, phoneNumber, address }) {
  const classesObjectStyles = {
    cardDonor: 'max-w-sm px-1 py-1 m-10 mx-6 bg-gray-200 sm:w-full',
    cardIcon: 'w-6 h-6 px-1 my-3 mr-2',
    cardTitle: 'pt-2 text-2xl font-bold sm:text-2xl md:text-2xl lg:text-2xl',
  };

  return (
    <div className={classesObjectStyles.cardDonor}>
      <div className="flex">
        <img className={classesObjectStyles.cardIcon} src={name} alt="icon" />
        <span className={classesObjectStyles.cardTitle}> {donorName} </span>
      </div>

      <div className="flex">
        <img className={classesObjectStyles.cardIcon} src={bloodType} alt="icon" />
        <span className={classesObjectStyles.cardTitle}>{blodType} </span>
      </div>
      <div className="flex">
        <img className={classesObjectStyles.cardIcon} src={phone} alt="icon" />
        <span className={classesObjectStyles.cardTitle}> {phoneNumber}</span>
      </div>
      <div className="flex">
        <img className={classesObjectStyles.cardIcon} src={addresIco} alt="icon" />
        <span className={classesObjectStyles.cardTitle}> {address}</span>
      </div>
    </div>
  );
}

DonorComponent.propTypes = {
  donorName: PropTypes.element.isRequired,
  blodType: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
export default DonorComponent;
