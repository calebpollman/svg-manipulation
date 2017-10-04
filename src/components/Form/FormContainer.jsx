import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import FormButton from './FormButton';
import FormOptions from './FormOptions';
import FormSelect from './FormSelect';
import FormTitle from './FormTitle';
import About from '../About/About.jsx';

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
    this.toggleOptions();
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
    const {isChrome, optionList, selectedTarget, setOption, showForm, svgList, updateOptions} = this.props;
    const {showButton, showOptions,  tempSelect} = this.state;

    return (
      <div className={showForm ? "form-background" : "form-background form-background-hidden"}>
        <div className="form-container">
          <div className="form-inner-container">
            <About />
            <FormTitle formTitle="Select SVG" />
            <FormSelect
              selectedTarget={selectedTarget}
              hideButton={this.hideButton}
              svgList={svgList}
              toggleOptions={this.toggleOptions}
              updateSelect={this.updateSelect}
            />
            <FormOptions
              isChrome={isChrome}
              optionList={optionList}
              setOption={setOption}
              showOptions={showOptions}
              tempSelect={tempSelect}
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
