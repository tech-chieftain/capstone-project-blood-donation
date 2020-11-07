import React from 'react';
import renderer from 'react-test-renderer';
import FirstStep from '../FirstStep';

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(
      <FirstStep
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
        onChange={() => console.log('donate')}
        setStep={() => console.log('donate')}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
