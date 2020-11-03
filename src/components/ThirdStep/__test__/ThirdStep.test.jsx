import React from 'react';
import renderer from 'react-test-renderer';
import ThirdStep from '../ThirdStep';

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(
      <ThirdStep
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
        onRegister={() => console.log('donate')}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
