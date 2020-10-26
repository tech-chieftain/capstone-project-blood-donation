import React from 'react';
import SocialIcons from './SocialIcons/SocialIcons';
import NavLinks from '../Navlinks';
import Logo from '../images/Logo';


function Footer() {
  return (
    <div>
      <div className="bg-primary flex flex-col justify-center  items-center p-10 ">
        <div className="mb-5">
          <Logo />
        </div>
        <div>
          <p className="text-white text-center mb-4">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit
          </p>
        </div>
        <div>
        <NavLinks classname="flex justify-center flex-wrap" classFlag />
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}

export default Footer;
