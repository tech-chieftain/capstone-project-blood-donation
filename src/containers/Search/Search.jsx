import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Table from '../../components/Table';
import { getDonaor } from '../../Utilities/FirebaseUtilities';
import BackgroundImage from './images/search.png';
import Hero from '../../components/Hero';
import Button from '../../components/Button';
import InputSelect from '../../components/InputSelect';

function Search() {
  const { t, i18n } = useTranslation();
  const [search, setsearch] = useState({ bloodType: '', city: '' });
  const [city, setcity] = useState('');
  const [donors, setDonors] = useState([]);
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
    setcity(value);
  };
  const onclick = () => {
    getDonaor(search.bloodType, search.city).then((data) => setDonors(data));
  };

  return (
    <div>
      <Hero img={BackgroundImage}>
        <div className=" bg-white bg-opacity-25 w-8/12 sm:w-6/12  lg:w-4/12 mx-auto self-center px-8 py-12">
          <p className="text-white text-base md:text-lg mb-6 text-center">
            {t('search_page.herotext')}
          </p>
          <InputSelect
            city={search.bloodType}
            onChange={onChange}
            name="bloodType"
            text={t('search_page.bloodtype')}
            options={bloodTypes}
            classflag
          />
          <InputSelect
            city={city}
            onChange={onChange}
            name="city"
            text={t('search_page.city')}
            options={cities}
            classflag
          />
          <div className="flex justify-end">
            <Button text={t('search_page.searchbutton')} classFlag={false} onclick={onclick} />
          </div>
        </div>
      </Hero>
      <Table donors={donors} />
    </div>
  );
}

export default Search;
