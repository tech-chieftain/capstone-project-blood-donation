import React from 'react';
import { useTranslation } from 'react-i18next';
import Paragraph from '../../components/Paragraph';

function Terms() {
  const { t } = useTranslation();
  const styleClass = {
    HeaderStyle: `text-primary  md:text-lg lg:text-xl font-medium  pb-5 pt-5`,
    TextStyle: `sm:text-sm md:text-base lg:text-lg leading-8 `,
  };

  return (
    <div className="p-10 ">
      <Paragraph
        headerText={t('Terms.TermsAndServices')}
        paragraphText={t('Terms.TermsText')}
        headerFlag
        paragraphFlag
      />
      <h1 className={styleClass.HeaderStyle}>{t('Terms.TermsOfUse')}</h1>
      <ol className="list-decimal">
        <li className={styleClass.TextStyle}>{t('Terms.firstTerm')}</li>
        <li className={styleClass.TextStyle}>{t('Terms.secondTerm')}</li>
        <li className={styleClass.TextStyle}>{t('Terms.thirdTerm')}</li>
        <li className={styleClass.TextStyle}>{t('Terms.forthTerm')}</li>
        <li className={styleClass.TextStyle}>{t('Terms.fifthTerm')}</li>
        <li className={styleClass.TextStyle}>{t('Terms.sixthTerm')}</li>
        <li className={styleClass.TextStyle}>{t('Terms.seventhTerm')}</li>
      </ol>
      <h1 className={styleClass.HeaderStyle}> {t('Terms.Services')}</h1>
      <ol className="list-decimal">
        <li className={styleClass.TextStyle}>{t('Terms.firstService')}</li>
        <li className={styleClass.TextStyle}>{t('Terms.secondService')}</li>
        <li className={styleClass.TextStyle}>{t('Terms.thirdService')}</li>
        <li className={styleClass.TextStyle}>{t('Terms.forthService')}</li>
        <li className={styleClass.TextStyle}>{t('Terms.fifthService')}</li>
      </ol>
    </div>
  );
}

export default Terms;
