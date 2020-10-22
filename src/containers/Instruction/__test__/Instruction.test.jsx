import React from 'react';
import renderer from 'react-test-renderer';
import Instruction from '../Instruction';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<Instruction />).toJSON();
  expect(tree).toMatchSnapshot();
});
