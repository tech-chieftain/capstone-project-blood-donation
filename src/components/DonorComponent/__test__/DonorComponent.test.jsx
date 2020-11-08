import React from 'react';
import renderer from 'react-test-renderer';
import DonorComponent from '../DonorComponent';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <DonorComponent
        donorName="Emad Alhattami"
        bloodType="A-"
        phoneNumber="774373827"
        address="Sana'a"
        email="emad@gmail.com"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
