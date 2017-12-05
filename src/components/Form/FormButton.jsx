import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormButton extends Component {
  buttonAction = (event) => {
    event.preventDefault();
    if (event.type === 'click') {
      this.props.buttonAction();
    }
  }

  render() {
    const {buttonText, showButton, showForm} = this.props;

    return (
      <div className={showButton ? "form-button-container" : "form-button-container hide-button"}>
        <button
          className={showForm ? "form-button tk-europa" : "form-button tk-europa form-button-hidden"}
          onClick={(event) => this.buttonAction(event)}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

FormButton.PropTypes = {
  buttonAction: PropTypes.func,
  buttonText: PropTypes.string,
  showButton: PropTypes.bool,
  showForm: PropTypes.bool,
}

export default FormButton;
