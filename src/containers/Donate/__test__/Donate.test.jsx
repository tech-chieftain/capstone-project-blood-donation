import React from 'react';
import renderer from 'react-test-renderer';
import Donate from '../Donate';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<Donate />).toJSON();
  expect(tree).toMatchSnapshot();
});
