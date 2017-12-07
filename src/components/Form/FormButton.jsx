import React from 'react';
import PropTypes from 'prop-types';

const FormButton = ({buttonAction, buttonText, showContents, showForm}) => {
  return (
    <div className={showContents ? "form-button-container" : "form-button-container hide-button"}>
      <button
        className={showForm ? "form-button tk-europa" : "form-button tk-europa form-button-hidden"}
        onClick={(event) => buttonAction(event)}
      >
        {buttonText}
      </button>
    </div>
  );
}

FormButton.propTypes = {
  buttonAction: PropTypes.func,
  buttonText: PropTypes.string,
  showContents: PropTypes.bool,
  showForm: PropTypes.bool,
}

export default FormButton;
