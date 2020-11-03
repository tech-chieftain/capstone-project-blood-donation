import React from 'react';
import { PropTypes } from 'prop-types';

function DonorRow({ key, name, city, bloodType, phone, email }) {
  const StylesClass = {
    grayColor: 'bg-gray-100',
    whiteColor: 'bg-white',
    ceilClass: 'border px-4 py-2',
  };
  return (
    <div>
      <tr className={key % 2 === 0 ? StylesClass.grayColor : StylesClass.whiteColor}>
        <td className={StylesClass.ceilClass}>{name}</td>
        <td className={StylesClass.ceilClass}>{city}</td>
        <td className={StylesClass.ceilClass}>{bloodType}</td>
        <td className={StylesClass.ceilClass}>{phone}</td>
        <td className={StylesClass.ceilClass}>{email}</td>
      </tr>
    </div>
  );
}

DonorRow.propTypes = {
  key: PropTypes,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  bloodType: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default DonorRow;
