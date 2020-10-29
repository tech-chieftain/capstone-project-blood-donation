import React from 'react';
import { PropTypes } from 'prop-types';

function Paragraph({ headerText, paragraphText, headerFlag, paragraphFlag }) {
  const styleClass = {
    headerStyle: `text-primary-100  sm:text-xl md:text-2xl lg:text-3xl pt-1 font-semibold  ${
      headerFlag ? 'text-center' : ''
    }`,
    paragrphStyle: ` pt-3 pb-5  sm:text-sm md:text-base lg:text-lg  ${
      paragraphFlag ? 'text-center' : ''
    } `,
  };
  return (
    <div >
      <h1 className={styleClass.headerStyle}>{headerText}</h1>
      <p className={styleClass.paragrphStyle}>{paragraphText}</p>
    </div>
  );
}

Paragraph.propTypes = {
  headerText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
  headerFlag: PropTypes.bool,
  paragraphFlag: PropTypes.bool,
};
export default Paragraph;
