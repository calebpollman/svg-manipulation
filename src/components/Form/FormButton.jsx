import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormButton extends Component {
  submitForm = (e) => {
    e.preventDefault();
    if (e.type === 'click') {
      this.props.submitForm();
    }
  }

  render() {
    return (
      <button
        className="form-button tk-europa"
        onClick={(e) => this.submitForm(e)}
      >
        View SVG
      </button>
    );
  }
}

FormButton.PropTypes = {
  submitForm: PropTypes.func,
}

export default FormButton;
