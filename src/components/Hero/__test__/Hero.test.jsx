import React from 'react';
import renderer from 'react-test-renderer';
import Hero from '../Hero';
import HeroImg from '../images/Man-Smiling-Donating-Blood.jpg';

it('renders correctly', () => {
  const tree = renderer.create(<Hero img={HeroImg} />).toJSON();
  expect(tree).toMatchSnapshot();
});
