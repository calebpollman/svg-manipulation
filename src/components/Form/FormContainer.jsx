import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import FormButton from './FormButton';
import FormOptions from './FormOptions';
import FormSelect from './FormSelect';
import FormTitle from './FormTitle';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempSelect: this.props.selectedTarget,
      showButton: true,
      showOptions: false,
    }

    this.hideButton = this.hideButton.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  hideButton = () => {
    this.setState({
      showButton: !this.state.showButton,
    });
  }

  submitForm = () => {
    let value = this.state.tempSelect;
    this.props.updateTarget(value);
    this.props.hideForm();
  }

  toggleOptions = (value) => {
    this.setState({
      showOptions: value,
    })
  }

  updateSelect = (input) => {
    this.setState({
      tempSelect: input,
      showButton: true,
    });
  }

  render() {
    const {optionList, selectedTarget, setOption, showForm, svgList, svgOptions, updateOptions} = this.props;
    const {showButton, showOptions} = this.state;

    return (
      <div className={showForm ? "form-background" : "form-background form-background-hidden"}>
        <div className="form-container">
          <div className="form-inner-container">
            <FormTitle formTitle="Select SVG" />
            <FormSelect
              selectedTarget={selectedTarget}
              hideButton={this.hideButton}
              svgList={svgList}
              toggleOptions={this.toggleOptions}
              updateSelect={this.updateSelect}
            />
            <FormOptions
              optionList={optionList}
              setOption={setOption}
              showOptions={showOptions}
              svgOptions={svgOptions}
              updateOptions={updateOptions}
            />
            <FormButton
              buttonText="View SVG"
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
  selectedTarget: PropTypes.string.isRequired,
  showForm: PropTypes.bool,
  svgList: PropTypes.array,
  svgOptions: PropTypes.object,
  updateOptions: PropTypes.func,
  updateTarget: PropTypes.func,
}

export default FormContainer;
