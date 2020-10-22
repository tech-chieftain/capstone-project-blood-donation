import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
