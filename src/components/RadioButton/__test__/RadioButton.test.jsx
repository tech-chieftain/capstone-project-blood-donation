import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from '../RadioButton';

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(
      <RadioButton
        donor={{
          name: '',
          email: '',
          phone: '',
          date: '',
          weight: '',
          sickness: '',
          bloodType: '',
          gender: '',
        }}
        onChange={() => console.log('saleem')}
        radiotext="3 . Have you ever had a cancer other than basal cell carcinoma or cervical carcinoma insitu (CIN)?*"
        RadioOptions={['Yes', 'No']}
        name="sickness"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
