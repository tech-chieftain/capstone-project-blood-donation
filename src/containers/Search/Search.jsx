import React from 'react';
import Table from '../../components/Table';

function Search() {
  const donors = [
    {
      id: 1,
      name: 'ali',
      city: 'sanaa',
      bloodType: 'A+',
      phone: '772455696',
      email: 'ali@gmail.com',
    },
    {
      id: 2,
      name: 'mohamed',
      city: 'Aden',
      bloodType: 'A+',
      phone: '772455696',
      email: 'mo@gmail.com',
    },
  ];

  return (
    <div>
      Search
      <Table donors={donors} />
    </div>
  );
}

export default Search;
