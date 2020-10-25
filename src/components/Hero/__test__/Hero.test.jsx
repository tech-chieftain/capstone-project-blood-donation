import React from 'react';
import renderer from 'react-test-renderer';
import Hero from '../Hero';
import HeroImg from '../images/Man-Smiling-Donating-Blood.jpg'


// This is an example of a Snapshot. It will create a new snapshot which all future
// tests will use to compare to.
it('renders correctly', () => {
    const tree = renderer.create(<Hero img={HeroImg} childComponent={<h1>hi</h1>} />).toJSON();
    expect(tree).toMatchSnapshot();
});