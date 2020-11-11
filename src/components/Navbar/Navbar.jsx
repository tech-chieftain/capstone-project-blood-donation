import React, { useState } from 'react';
import NavLink from '../Navlinks/Navlinks';
import Logo from '../images/Logo';

function Navbar() {
  // this  state to control the shown menu icon
  const [show, setShow] = useState(false);
  // this  state to control the class of unordered list in navelinks
  const [classname, setclassna] = useState('hidden');
  const closeMenu = () => {
    if (show) {
      const name = show ? 'hidden' : '';
      setclassna(name);
      setShow(false);
    }
  };
  // when meue icon clicked the label changes depending on the value of show
  // stytleflage is used to decide the way of stayling the donate links inside navlinks where it is at the navbar shwon like button where at the footer it is shown as link
  return (
    <div className="bg-primary py-4 px-4 md:px-8 flex justify-between flex-wrap items-center">
      <Logo />
      <label
        htmlFor="menu-toggle"
        className="mr-2 md:mr-4 md:hidden text-white text-2xl sm:text-3xl cursor-pointer"
      >
        {show ? <span>&#10005;</span> : <span> &#9776;</span>}
        <input
          type="checkbox"
          className="hidden"
          id="menu-toggle"
          checked={show}
          onChange={(e) => {
            const name = show ? 'hidden' : '';
            setclassna(name);
            setShow(e.target.checked);
          }}
        />
      </label>
      <NavLink classname={classname} menuClose={closeMenu} classFlag={false} />
    </div>
  );
}

export default Navbar;
