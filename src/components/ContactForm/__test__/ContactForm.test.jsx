import React from 'react';
import renderer from 'react-test-renderer';
import ContactForm from '../ContactForm';

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<ContactForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
