import React from 'react';
import FBIcon from '../../images/SocialIcons/FBIcon';
import InstaIcon from '../../images/SocialIcons/InstaIcon';
import LinkedInIcon from '../../images/SocialIcons/LinkedInIcon';
import TwitterIcon from '../../images/SocialIcons/TwitterIcon';
import UtupeIcon from '../../images/SocialIcons/UtupeIcon';

function SocialIcons() {
  return (
    <div className="flex my-8">
      <a href="www.Facebook.com">
        <FBIcon />
      </a>
      <a href="www.Instegram.com">
        <InstaIcon />
      </a>
      <a href="www.Linkedin.com">
        <LinkedInIcon />
      </a>
      <a href="www.Twitter.com">
        <TwitterIcon />
      </a>
      <a href="www.YouTupe.com">
        <UtupeIcon className="mr-4" />
      </a>
    </div>
  );
}
export default SocialIcons;
