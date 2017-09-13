import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import FormSelect from './FormSelect';
import FormButton from './FormButton';
import FormTitle from './FormTitle';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempSelect: this.props.selectedOption,
    }

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = () => {
    let value = this.state.tempSelect;
    this.props.updateOption(value);
    this.props.hideForm();
  }

  updateSelect = (input) => {
    this.setState({
      tempSelect: input,
    });
  }

  render() {
    const {selectedOption, svgList} = this.props;

    return (
      <div
         className="form-background"
      >
        <div className="form-container">
          <div className="form-inner-container">
            <FormTitle formTitle="Select SVG" />
            <FormSelect
              selectedOption={selectedOption}
              svgList={svgList}
              updateSelect={this.updateSelect}
            />
            <FormButton submitForm={this.submitForm} />
          </div>
        </div>
      </div>
    );
  }
}

FormContainer.PropTypes = {
  hideForm: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
  showForm: PropTypes.bool,
  svgList: PropTypes.array,
  updateOption: PropTypes.func,
}

export default FormContainer;
