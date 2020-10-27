import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../Card/Card';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Card
        cardImage="https://apifortress.com/doc/wp-content/uploads/2019/04/ForgeIcon_Black.svg"
        cardTitle=" Title "
        cardDesc=" Description "
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
