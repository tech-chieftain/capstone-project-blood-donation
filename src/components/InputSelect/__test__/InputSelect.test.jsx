import React from 'react';
import renderer from 'react-test-renderer';
import InputSelect from '../InputSelect';

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(
      <InputSelect
        placeholder="Name"
        onChange={() => console.log('send')}
        inputValue="name"
        inputName="name"
        Inputtype="text"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
