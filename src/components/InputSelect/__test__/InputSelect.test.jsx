import React from 'react';
import renderer from 'react-test-renderer';
import InputSelect from '../InputSelect';

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(
      <InputSelect
        city="Abyan"
        onChange={() => console.log('donate')}
        name="city"
        text="3. Please select your city ?*"
        options={[
          'Abyan',
          'Aden',
          'Al Mahrah',
          'Hadramaut',
          'Lahij',
          'Shabwah',
          'Dhale',
          'Amran',
          'Al Bayda',
          'Al Hudaydah',
          'Al Jawf',
          'Al Mahwit',
          'Dhamar',
          'Hajjah',
          'Ibb',
          "Ma'rib",
          'Raymah',
          'Saada',
          "Sana'a",
          'Taiz',
          'Socotra',
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
