import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '../Paragraph';

it('renders correctly', () => {
  const tree = renderer
    .create(<Paragraph headerText paragraphText headerFlag paragraphFlag />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
