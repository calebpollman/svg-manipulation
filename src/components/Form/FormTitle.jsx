import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../Icons/CloseIcon';
import ThatEssIcon from '../Icons/ThatEssIcon';

const FormTitle = ({formTitle, showAbout, toggleAbout}) => {
  return (
    <div className="title-container">
      <p className="title-text tk-europa">{formTitle}</p>
      <div
        className="title-icon-container"
        onClick={toggleAbout}
      >
        {!showAbout ? <ThatEssIcon showAbout={showAbout} /> : <CloseIcon type="close-about" />}
      </div>
    </div>
  )
}

FormTitle.propTypes = {
  formTitle: PropTypes.string,
  showAbout: PropTypes.bool,
  toggleAbout: PropTypes.func,
}

export default FormTitle;
