import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from '../Button';

function ReadytoDonate({ header, text }) {
  const history = useHistory();
  return (
    <div>
      <div className="text-black text-lg sm:text-xl md:text-2xl font-semibold">{header}</div>
      <div className="text-black w-6/12 text-sm sm:text-base md:text-lg tracking-wide leading-wide">
        {text}
      </div>
      <div>
        <Button text="Donate" onclick={() => history.push('./Donate')} />
      </div>
    </div>
  );
}

ReadytoDonate.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};
// Specifies the default values for props:
ReadytoDonate.defaultProps = {
  header: 'Ready to Donate?',
  text: 'It does not make much time and every donation has the power to save up to three lives',
};
export default ReadytoDonate;
