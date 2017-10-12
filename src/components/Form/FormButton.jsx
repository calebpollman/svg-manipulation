import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormButton extends Component {
  submitForm = (event) => {
    event.preventDefault();
    if (event.type === 'click') {
      this.props.submitForm();
    }
  }

  render() {
    const {buttonText, showButton, showForm} = this.props;

    return (
      <div className={showButton ? "form-button-container" : "form-button-container hide-button"}>
        <button
          className={showForm ? "form-button tk-europa" : "form-button tk-europa form-button-hidden"}
          onClick={(event) => this.submitForm(event)}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

FormButton.PropTypes = {
  buttonText: PropTypes.string,
  showButton: PropTypes.bool,
  showForm: PropTypes.bool,
  submitForm: PropTypes.func,
}

export default FormButton;
