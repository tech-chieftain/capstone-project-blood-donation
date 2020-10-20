import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from '../Button';

// This is an example of a test that tests a component to make sure its working properly.
// Do not confuse this with a SnapShot test, explained below, since a snapshot test only makes a COPY of the
// component that gets saved in the repo then compares to it everytime we run a test.
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button text="Value" />, div);
});

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer.create(<Button text="Value" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('props.onClick is called when button is clicked', () => {
  const fn = jest.fn();
  const tree = renderer.create(<Button text="text" onClick={fn} />);
  // Simulate button click
  const button = tree.root.findByType('button');
  button.props.onClick();
  // Verify callback is invoked
  expect(fn.mock.calls.length).toBe(1);
});
