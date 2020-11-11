import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../Button';

function ReadytoDonate() {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
        {t('ready_donate.header')}
      </div>
      <div className="text-black  text-sm sm:text-base md:text-lg ">{t('ready_donate.text')}</div>
      <div>
        <Button text={t('ready_donate.button')} onclick={() => history.push('./Donate')} />
      </div>
    </div>
  );
}

export default ReadytoDonate;
