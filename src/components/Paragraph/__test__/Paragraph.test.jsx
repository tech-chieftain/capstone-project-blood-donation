import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '../Paragraph';

it('renders correctly', () => {
  const tree = renderer
    .create(<Paragraph headerText paragraphText headerCenter ParagraphCenter />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
