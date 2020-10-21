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
          styleName="buttonRed"
          path="/donate"
          onClick={() => console.log('saleem')}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
