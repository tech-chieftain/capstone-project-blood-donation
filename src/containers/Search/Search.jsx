import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Table from '../../components/Table';

import { getDonaor } from '../../Utilities/FirebaseUtilities';
import BackgroundImage from './images/search.png';
import Hero from '../../components/Hero';
import Button from '../../components/Button';
import InputSelect from '../../components/InputSelect';
import Paragraph from '../../components/Paragraph/Paragraph';
import DonorCard from '../../components/DonorComponent';
import Loading from './images/loading.gif';

function Search() {
  const { t, i18n } = useTranslation();
  const [search, setsearch] = useState({ bloodType: '', city: '' });
  const [city, setcity] = useState('');
  const [donors, setDonors] = useState([]);
  const [load, setLoad] = useState(true);
  const [nodonor, setNodonor] = useState(false);
  const scrollRef = useRef(null);
  const bloodTypes = Array.from(t('bloodTypes', { returnObjects: true }));
  const cities = Array.from(t('cities', { returnObjects: true }));

  const onChange = (e) => {
    const { name, value } = e.target;
    if (i18n.language === 'ar' && name === 'city') {
      const cities = t('cities', { returnObjects: true });
      const index = cities.indexOf(value);
      const citiesEnglish = t('cities', { lng: 'en', returnObjects: true });
      setsearch({
        ...search,
        [name]: citiesEnglish[index],
      });
    } else {
      setsearch({
        ...search,
        [name]: value,
      });
    }
    if ((i18n.language === 'ar' || i18n.language === 'en') && name === 'city') {
      setcity(value);
    }
  };
  const onclick = () => {
    setLoad(false);
    setNodonor(false);
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    getDonaor(search.bloodType, search.city).then((data) => {
      setDonors(data);
      setLoad(true);
      if (data.length === 0) {
        setNodonor(true);
      } else {
        setNodonor(false);
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>LifeVessel - Search</title>
      </Helmet>
      <Hero img={BackgroundImage}>
        <div className=" bg-white bg-opacity-25 w-8/12 sm:w-6/12  lg:w-4/12 mx-auto self-center px-8 py-12">
          <p className="text-white text-base md:text-lg mb-6 text-center">
            {t('search_page.herotext')}
          </p>
          <div className="mb-4">
            <InputSelect
              city={search.bloodType}
              onChange={onChange}
              name="bloodType"
              text={t('search_page.bloodtype')}
              options={bloodTypes}
              classflag
            />
          </div>
          <div className="mb-4">
            <InputSelect
              city={city}
              onChange={onChange}
              name="city"
              text={t('search_page.city')}
              options={cities}
              classflag
            />
          </div>

          <div className="flex justify-end">
            <Button text={t('search_page.searchbutton')} classFlag={false} onclick={onclick} />
          </div>
        </div>
      </Hero>
      <div className="my-6 sm:my-8 w-11/12 sm:w-9/12 md:w-8/12 mx-auto">
        <Paragraph
          headerText={t('search_page.tableHeader')}
          paragraphText={t('search_page.tableText')}
          headerFlag
          paragraphFlag
        />
      </div>

      <div ref={scrollRef}>
        {donors.length > 0 && load ? (
          <div className="hidden md:block">
            <Table donors={donors} />
          </div>
        ) : null}
        {donors.length > 0 && load ? (
          <div className="block md:hidden">
            {donors.map((donor) => (
              <div className="w-10/12 sm:w-8/12 mx-auto mb-6">
                <DonorCard
                  key={donor.id}
                  phoneNumber={donor.phone}
                  email={donor.email}
                  donorName={donor.name}
                  bloodType={donor.bloodType}
                  address={donor.city}
                />
              </div>
            ))}
          </div>
        ) : null}
        {!load ? (
          <div className="w-4/12 mx-auto flex  justify-center">
            <img className="object-cover" src={Loading} alt="loading" />
          </div>
        ) : null}
        {nodonor ? (
          <div className=" text-primary-100 text-lg sm:text-xl sm:my-8 w-11/12 sm:w-9/12 md:w-8/12 mx-auto text-center mb-6">
            {t('search_page.nodonors')}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Search;
