import React from 'react';
import renderer from 'react-test-renderer';
import InputFiled from '../InputField';

// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(
      <InputFiled
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
