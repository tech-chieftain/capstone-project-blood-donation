import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<Button text="Value" />).toJSON();
  expect(tree).toMatchSnapshot();
});
