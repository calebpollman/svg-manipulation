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
      <div className="form-input-container tk-europa">
        <FormCheckBox
          checked={checked}
          handleClick={this.handleClick}
          title={title}
        />
      <p className={checked ? "input-text input-text-selected" : "input-text"}>{title}</p>
      </div>
    );
  }
}

FormInput.PropTypes = {
  title: PropTypes.string,
  setOption: PropTypes.func,
}

export default FormInput;
