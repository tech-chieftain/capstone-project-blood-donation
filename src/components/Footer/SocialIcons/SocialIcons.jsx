import React from 'react';
import FBIcon from '../../images/SocialIcons/FBIcon';
import InstaIcon from '../../images/SocialIcons/InstaIcon';
import LinkedInIcon from '../../images/SocialIcons/LinkedInIcon';
import TwitterIcon from '../../images/SocialIcons/TwitterIcon';
import UtupeIcon from '../../images/SocialIcons/UtupeIcon';

function SocialIcons() {
  return (
    <div className="flex my-8">
      <a target="_blank" rel="noreferrer" href="http://www.facebook.com">
        <FBIcon />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
        <InstaIcon />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
        <LinkedInIcon />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/">
        <TwitterIcon />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
        <UtupeIcon className="mr-4" />
      </a>
    </div>
  );
}
export default SocialIcons;
