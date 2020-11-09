import React from 'react';
import { useTranslation } from 'react-i18next';
import RegistrationCard from '../../components/RegistrationCard/RegistrationCard';
import register from '../../components/images/process_image/register.svg';
import health from '../../components/images/process_image/health.svg';
import donation from '../../components/images/process_image/donation.svg';
import cookie from '../../components/images/process_image/cookie.svg';
import blood from '../../components/images/process_image/blood.svg';

function Process() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mx-6 my-6">
        <h1 className="pt-1 font-semibold text-center text-primary-100 sm:text-xl md:text-2xl lg:text-3xl">
          {t('donation_process.titleCard')}
        </h1>
        <h1 className="pt-1 font-semibold text-center text-black sm:text-xl md:text-2xl lg:text-3xll">
          {t('donation_process.secondTitle')}
        </h1>
        <p className="pt-3 text-center sm:text-sm md:text-base lg:text-lg">
          {' '}
          {t('donation_process.Paragraph')}
        </p>
      </div>
      <div className="flex flex-col">
        <RegistrationCard
          icon={register}
          title={t('donation_process.registerTitle')}
          description={t('donation_process.registerDesc')}
        />
        <RegistrationCard
          icon={health}
          title={t('donation_process.healthTitle')}
          description={t('donation_process.healthDesc')}
        />
        <RegistrationCard
          icon={donation}
          title={t('donation_process.donationTitle')}
          description={t('donation_process.donationDesc')}
        />
        <RegistrationCard
          icon={cookie}
          title={t('donation_process.refreshmentTitle')}
          description={t('donation_process.refreshmentDesc')}
        />
        <RegistrationCard
          icon={blood}
          title={t('donation_process.testingTitle')}
          description={t('donation_process.testingDesc')}
        />
      </div>
    </div>
  );
}
export default Process;
