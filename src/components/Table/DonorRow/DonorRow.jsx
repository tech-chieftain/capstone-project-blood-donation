import React from 'react';
import { PropTypes } from 'prop-types';

function DonorRow({ donor }) {
  const StylesClass = {
    grayColor: 'w-full bg-gray-200',
    whiteColor: 'we-full bg-red',
    ceilClass:
      'border px-4 py-2 text-center lg:px-6 mt-4 md:mt-0  whitespace-no-wrap border-b bg-gray',
    headerStyle:
      'border px-4 py-2 text-white text-center leading-4 text-sm tracking-wider text-left',
  };
  return (
    <>
      <tr className={donor.id % 2 === 0 ? StylesClass.grayColor : StylesClass.whiteColor}>
        <td className={StylesClass.ceilClass}>{donor.name}</td>
        <td className={StylesClass.ceilClass}>{donor.bloodType}</td>
        <td className={StylesClass.ceilClass}>{donor.city}</td>
        <td className={StylesClass.ceilClass}>{donor.phone}</td>
        <td className={StylesClass.ceilClass}>{donor.email}</td>
      </tr>
    </>
  );
}

DonorRow.propTypes = {
  donor: PropTypes.object,
};

export default DonorRow;
