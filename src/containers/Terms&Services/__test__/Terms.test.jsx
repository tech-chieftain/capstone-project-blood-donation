import React from 'react';
import renderer from 'react-test-renderer';
import Terms from '../Terms';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<Terms />).toJSON();
  expect(tree).toMatchSnapshot();
});
