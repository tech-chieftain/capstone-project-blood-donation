import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavLink from '../Navlink';

// tests will use to compare to.
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <NavLink
          path="/donate"
          styleName="px-2 py-2 lg:px-6  mt-4 md:mt-0 sm:mr-0 md:mr-2 lg:mr-4 text-sm  text-white tracking-wide inline-block border-b-2 border-transparent hover:border-white "
          text="Donate"
          menuClose={() => console.log('Donate')}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
