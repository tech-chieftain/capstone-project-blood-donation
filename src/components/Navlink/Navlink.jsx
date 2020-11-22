import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function NavLink({ path, text, styleName, menuClose }) {
  return (
    <li>
      <Link to={path} className={styleName} onClick={menuClose}>
        {text}
      </Link>
    </li>
  );
}

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  menuClose: PropTypes.func,
};
export default NavLink;
