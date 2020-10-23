import React from 'react';
import renderer from 'react-test-renderer';
import Process from '../Process';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<Process />).toJSON();
  expect(tree).toMatchSnapshot();
});
