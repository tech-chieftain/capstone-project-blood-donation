import React from 'react';
import { PropTypes } from 'prop-types';

function Paragraph({ headerText, paragraphText, headerCenter, ParagraphCenter }) {
  const classesObjectStyle = {
    containerStyle: 'bg-gray-200 w-screen',
    textDivStyle: ' w-11/12 ml-12 ',
    headisCentered: headerCenter ? 'text-center' : '',
    textStyle: 'text-primary-100 font-bold pt-5 pb-5',
    ParagraphisCentered: ParagraphCenter ? 'text-center' : '',
  };
  return (
    <div className={classesObjectStyle.containerStyle}>
      <div className={classesObjectStyle.textDivStyle}>
        <h1 className={classesObjectStyle.textStyle}>{headerText}</h1>
        <p className={classesObjectStyle.ParagraphisCentered}>{paragraphText}</p>
      </div>
    </div>
  );
}

Paragraph.propTypes = {
  headerText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
  headerCenter: PropTypes.bool,
  ParagraphCenter: PropTypes.bool,
};
export default Paragraph;
