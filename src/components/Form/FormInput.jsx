import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormCheckBox from './FormCheckBox';

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.value,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (label) => {
    const checkValue = !this.state.checked;
    const type = this.props.type;
    this.setState({
      checked: checkValue,
    }, this.props.setOption(type, label, checkValue));
  }

  render() {
    const {label} = this.props;
    const {checked} = this.state;

    return (
      <div className="form-input-container tk-europa">
        <FormCheckBox
          checked={checked}
          handleClick={this.handleClick}
          label={label}
        />
        <p className={checked ? "input-text input-text-selected" : "input-text"}>{label}</p>
      </div>
    );
  }
}

FormInput.PropTypes = {
  label: PropTypes.string,
  setOption: PropTypes.func,
}

export default FormInput;
