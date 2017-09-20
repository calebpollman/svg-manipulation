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

  handleClick = (e) => {
    e.preventDefault();
    const label = e.target.getAttribute('value');
    const checkValue = !this.state.checked;

    this.setState({
      checked: checkValue,
    }, this.props.setOption(label, checkValue));
  }

  render() {
    const {label} = this.props;
    const {checked} = this.state;

    return (
      <div className="form-input-container tk-europa">
        <div onClick={(e) => this.handleClick(e)} value={label}>
          <FormCheck checked={checked} />
        </div>
        <p className={checked ? "input-text input-text-selected" : "input-text"}>{label}</p>
      </div>
    );
  }
}

FormInput.PropTypes = {
  label: PropTypes.string,
}

export default FormInput;
