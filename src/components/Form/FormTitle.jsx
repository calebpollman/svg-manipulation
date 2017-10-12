import React from 'react';
import PropTypes from 'prop-types';
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

FormTitle.PropTypes = {
  formTitle: PropTypes.string,
  showAbout: PropTypes.bool,
  toggleAbout: PropTypes.func,
}

export default FormTitle;
