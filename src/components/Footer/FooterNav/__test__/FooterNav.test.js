import React from 'react';
import renderer from 'react-test-renderer';
import FooterNav from '../FooterNav';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<FooterNav />).toJSON();
  expect(tree).toMatchSnapshot();
});