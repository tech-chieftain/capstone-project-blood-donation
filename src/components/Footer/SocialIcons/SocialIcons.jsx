import React from 'react';
import FBIcon from '../../images/SocialIcons/FBIcon';
import InstaIcon from '../../images/SocialIcons/InstaIcon';
import LinkedInIcon from '../../images/SocialIcons/LinkedInIcon';
import TwitterIcon from '../../images/SocialIcons/TwitterIcon';
import UtupeIcon from '../../images/SocialIcons/UtupeIcon';

function SocialIcons() {
  return (
    <div className="flex">
      <FBIcon className="mr-4" />
      <InstaIcon className="mr-4" />
      <LinkedInIcon className="mr-4" />
      <TwitterIcon className="mr-4" />
      <UtupeIcon className="mr-4" />
    </div>
  );
}
export default SocialIcons;
