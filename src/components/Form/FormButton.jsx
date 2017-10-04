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
    const {buttonText, showButton} = this.props;

    return (
      <div className={showButton ? "form-button-container" : "form-button-container hide-button"}>
        <button
          className="form-button tk-europa"
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
  showButon: PropTypes.string,
  submitForm: PropTypes.func,
}

export default FormButton;
