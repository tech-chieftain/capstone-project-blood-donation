import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Button from '../Button';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Button
          text="Value"
          styleName="px-6 py-1 mt-4 text-base inline-block md:mt-0 text-white  hover:text-gray-100 border-b-2 border-transparent hover:border-white md:mr-4 lg:mr-8 mr-2"
          path="/donate"
          onClick={() => console.log('saleem')}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
