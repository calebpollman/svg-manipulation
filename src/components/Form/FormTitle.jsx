import React from 'react';
import CloseIcon from '../Icons/CloseIcon';
import InfoIcon from '../Icons/InfoIcon';

const FormTitle = ({formTitle, showAbout, toggleAbout}) => {
  return (
    <div>
    <p className="select-label tk-europa">{formTitle}</p>
      <div
        className="title-icon-container"
        onClick={toggleAbout}
      >
        {!showAbout ? <InfoIcon /> : <CloseIcon />}
      </div>
    </div>
  )
}

export default FormTitle;
