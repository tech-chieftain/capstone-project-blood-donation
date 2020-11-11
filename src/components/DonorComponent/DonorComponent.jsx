import React from 'react';
import { PropTypes } from 'prop-types';
import name from '../images/donorcomponent/name.svg';
import blood from '../images/donorcomponent/blood_type.svg';
import phone from '../images/donorcomponent/phone.svg';
import addresIco from '../images/donorcomponent/location.svg';
import emailIco from '../images/donorcomponent/email.svg';
import DonorCard from '../DonorCard/DonorCard';

function DonorComponent({ donorName, bloodType, phoneNumber, address, email }) {
  return (
    <div>
      <DonorCard title={donorName} cardIcon={name} />
      <DonorCard title={bloodType} cardIcon={blood} />
      <DonorCard title={phoneNumber} cardIcon={phone} />
      <DonorCard title={address} cardIcon={addresIco} />
      <DonorCard title={email} cardIcon={emailIco} />
    </div>
  );
}

DonorComponent.propTypes = {
  donorName: PropTypes.element.isRequired,
  bloodType: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.element.isRequired,
};
export default DonorComponent;
