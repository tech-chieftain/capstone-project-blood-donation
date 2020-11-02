import React from 'react';
import renderer from 'react-test-renderer';
import Progress from '../Progress';

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<Progress steps={1} />).toJSON();
  expect(tree).toMatchSnapshot();
});
