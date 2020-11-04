import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {t('app_name')} <LanguageSwitcher />
    </div>
  );
}

export default Home;
