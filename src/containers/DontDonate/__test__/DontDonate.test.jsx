import React from 'react';
import renderer from 'react-test-renderer';
import DontDonate from '../DontDonate';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<DontDonate />).toJSON();
  expect(tree).toMatchSnapshot();
});
