import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormCheck from '../CheckBoxIcon/CheckBoxIcon';

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (value) => {
    const checkValue = !this.state.checked;
    this.setState({
      checked: checkValue,
    }, this.props.setOption(value, checkValue));
  }

  render() {
    const {label} = this.props;
    const {checked} = this.state;

    return (
      <div className="form-input-container tk-europa">
        <FormCheck checked={checked} handleClick={this.handleClick} value={label} />
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
