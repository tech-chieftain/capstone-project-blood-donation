import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});
