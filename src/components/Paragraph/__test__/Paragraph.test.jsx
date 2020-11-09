import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '../Paragraph';

it('renders correctly', () => {
  const tree = renderer
    .create(<Paragraph headerText="donate" paragraphText="header text" headerFlag paragraphFlag />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
