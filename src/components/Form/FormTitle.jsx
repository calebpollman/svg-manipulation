import React from 'react';
import CloseIcon from '../Icons/CloseIcon';
import InfoIcon from '../Icons/InfoIcon';

const FormTitle = ({formTitle, showAbout, toggleAbout}) => {
  return (
    <div className="title-container">
      <p className="title-text tk-europa">{formTitle}</p>
      <div
        className="title-icon-container"
        onClick={toggleAbout}
        title={!showAbout ? 'Information!' : 'Back to fun!'}
      >
        {!showAbout ? <InfoIcon /> : <CloseIcon />}
      </div>
    </div>
  )
}

export default FormTitle;
