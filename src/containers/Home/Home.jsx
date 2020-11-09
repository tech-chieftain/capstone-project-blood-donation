import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ReadytoDonate from '../../components/ReadytoDonate';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {t('app_name')} <LanguageSwitcher />
      <ReadytoDonate />
    </div>
  );
}

export default Home;
