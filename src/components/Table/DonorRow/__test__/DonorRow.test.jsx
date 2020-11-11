import React from 'react';
import renderer from 'react-test-renderer';
import DonorRow from '../DonorRow';

it('renders correctly', () => {
  const tree = renderer.create(<DonorRow />).toJSON();
  expect(tree).toMatchSnapshot();
});
