import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavLinks from '../Navlinks';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <NavLinks
          languageflag
          setlanguageflag={() => console.log('Donate')}
          classname="hidden"
          menuClose={() => console.log('Donate')}
          classFlag={false}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
