import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormButton from './FormButton';
import FormOptions from './FormOptions';
import FormSelect from './FormSelect';
import SvgPreview from '../Svg/SvgPreview';

class FormBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContents: false,
      tempSelect: this.props.selectedTarget,
    }

    this.toggleContents = this.toggleContents.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
  }

  toggleContents = () => {
    this.setState({
      showContents: !this.state.showContents,
    });
  }

  submitForm = () => {
    let value = this.state.tempSelect;
    
    this.toggleContents();
    this.props.toggleForm();
    this.props.updateTarget(value, 'resetSvg');
  }

  updateSelect = (input) => {
    if (this.state.tempSelect !== input) {
      this.props.updateTarget(input, 'resetPreview');
    }
    
    this.setState({
      showContents: true,
      tempSelect: input,
    });
  }

  render() {
    const {isChrome, optionList, selectedTarget, setOption, showForm, svgInfo, svgList} = this.props;
    const {showContents, tempSelect} = this.state;
    
    return (
      <div className={showContents ? "form-body" : "form-body form-body-hidden"}>
        <FormSelect
          selectedTarget={selectedTarget}
          toggleContents={this.toggleContents}
          svgList={svgList}
          updateSelect={this.updateSelect}
        />
        <SvgPreview 
          showContents={showContents}
          svgInfo={svgInfo} 
          tempSelect={tempSelect} 
        />
        <FormOptions
          isChrome={isChrome}
          optionList={optionList}
          setOption={setOption}
          showContents={showContents}
          svgInfo={svgInfo}
          tempSelect={tempSelect}
        />
        <FormButton
          buttonAction={this.submitForm}
          buttonText="View SVG"
          showContents={showContents}
          showForm={showForm}          
        />
      </div>
    );
  }
}

FormBody.propTypes = {
  isChrome: PropTypes.bool,
  optionList: PropTypes.object,
  selectedTarget: PropTypes.string,
  setOption: PropTypes.func,
  showForm: PropTypes.bool,
  svgList: PropTypes.array,
  updateTarget: PropTypes.func,
}

export default FormBody;
