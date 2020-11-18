import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderPharagrph from '../Paragraph';

function FourthStep() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();
  return (
    <div className=" w-11/12 xl:w-10/12 mb-6 sm:mb-8 md:mb-12">
      <HeaderPharagrph
        headerText={t('donate_fourth_page.title')}
        headerFlag={false}
        paragraphText={t('donate_fourth_page.paragrph')}
        paragraphFlag={false}
      />
    </div>
  );
}

export default FourthStep;
