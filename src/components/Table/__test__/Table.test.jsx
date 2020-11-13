import React from 'react';
import renderer from 'react-test-renderer';
import Table from '../Table';

it('renders correctly', () => {
  const tree = renderer.create(<Table />).toJSON();
  expect(tree).toMatchSnapshot();
});
