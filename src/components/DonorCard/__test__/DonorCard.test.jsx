import React from 'react';
import renderer from 'react-test-renderer';
import DonorCard from '../DonorCard';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <DonorCard
        title="title"
        cardIcon="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
