import React from 'react';
import renderer from 'react-test-renderer';
import InputSelect from '../InputSelect';

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(
      <InputSelect
        donor={{
          name: '',
          email: '',
          phone: '',
          date: '',
          weight: '',
          sickness: '',
          bloodType: '',
          gender: '',
          city: '',
        }}
        onChange={() => console.log('donate')}
        name="city"
        text="3. Please select your city ?*"
        options={['Abyan', 'Aden', 'Al Mahrah', 'Hadramaut', 'Lahij']}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
