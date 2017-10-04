import React, {Component} from 'react';
import FormButton from './FormButton';
import FormOptions from './FormOptions';
import FormSelect from './FormSelect';

class FormBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: true,
      showOptions: false,
      tempSelect: this.props.selectedTarget,
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
    const {isChrome, optionList, selectedTarget, setOption, svgList} = this.props;
    const {showButton, showOptions, tempSelect} = this.state;
    
    return (
      <div>
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
        />
        <FormButton
          buttonText="View SVG"
          submitForm={this.submitForm}
          showButton={showButton}
        />
      </div>
    );
  }
}

export default FormBody;
