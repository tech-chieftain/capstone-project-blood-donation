import React from 'react';
import renderer from 'react-test-renderer';
import SocialIcons from '../SocialIcons';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<SocialIcons />).toJSON();
  expect(tree).toMatchSnapshot();
});