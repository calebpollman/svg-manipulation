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
      showButton: true,
    }

    this.hideButton = this.hideButton.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  hideButton = () => {
    this.setState({
      showButton: !this.state.showButton,
    });
  }

  submitForm = () => {
    let value = this.state.tempSelect;
    this.props.updateOption(value);
    this.props.hideForm();
  }

  updateSelect = (input) => {
    this.setState({
      tempSelect: input,
      showButton: true,
    });
  }

  render() {
    const {selectedOption, showForm, svgList} = this.props;
    const {showButton} = this.state;

    return (
      <div className={showForm ? "form-background" : "form-background form-background-hidden"}>
        <div className="form-container">
          <div className="form-inner-container">
            <FormTitle formTitle="Select SVG" />
            <FormSelect
              selectedOption={selectedOption}
              hideButton={this.hideButton}
              svgList={svgList}
              updateSelect={this.updateSelect}
            />
            <FormButton
              submitForm={this.submitForm}
              showButton={showButton}
            />
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
