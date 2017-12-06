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

  handleClick = (title) => {
    const checkValue = !this.state.checked;
    const type = this.props.type;
    this.setState({
      checked: checkValue,
    }, this.props.setOption(type, title, checkValue));
  }

  render() {
    const {title, disabled} = this.props;
    const {checked} = this.state;
    const isDisabled = disabled ? ' form-input-container-disabled' : '';

    return (
      <div
        className={`form-input-container tk-europa${isDisabled}`}
        title={disabled ? 'This option is only available in Chrome.' : ''}
      >
        <FormCheckBox
          checked={checked}
          disabled={disabled}
          handleClick={this.handleClick}
          title={title}
        />
      <p className={checked ? 'input-text input-text-selected' : 'input-text'}>{title}</p>
      </div>
    );
  }
}

FormInput.propTypes = {
  disabled: PropTypes.bool,
  setOption: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.bool,
}

export default FormInput;
