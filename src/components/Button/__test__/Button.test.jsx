import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(<Button text="Donate" onclick={() => console.log('saleem')} classFlag />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
