import React from 'react';
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';
import DonorRow from './DonorRow';

function Table({ donors }) {
  const { t } = useTranslation();
  const StylesClass = {
    grayColor: 'w-full bg-gray-200',
    whiteColor: 'we-full bg-red',
    ceilClass:
      'border px-4 py-2 text-center lg:px-6 mt-4 md:mt-0  whitespace-no-wrap border-b bg-gray',
    headerStyle:
      'border px-4 py-2 text-white text-center leading-4 text-sm tracking-wider text-left',
  };

  return (
    <div>
      <table className="border table-auto  min-w-full">
        <thead>
          <tr className="bg-primary">
            <th className={StylesClass.headerStyle}>{t('table.name')}</th>
            <th className={StylesClass.headerStyle}>{t('table.bloodType')}</th>
            <th className={StylesClass.headerStyle}>{t('table.city')}</th>
            <th className={StylesClass.headerStyle}>{t('table.phone')}</th>
            <th className={StylesClass.headerStyle}>{t('table.email')}</th>
          </tr>
        </thead>
        <tbody> {donors ? donors.map((donor) => <DonorRow donor={donor} />) : null};</tbody>
      </table>
    </div>
  );
}
Table.propTypes = {
  donors: PropTypes,
};
export default Table;
