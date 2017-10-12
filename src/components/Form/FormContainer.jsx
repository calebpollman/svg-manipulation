import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import About from '../About/About';
import FormBody from './FormBody';
import FormTitle from './FormTitle';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAbout: false,
    }
  }

  toggleAbout = (event) => {
    event.preventDefault();
    this.setState({
      showAbout: !this.state.showAbout,
    });
  }

  render() {
    const {hideForm, isChrome, optionList, selectedTarget, setOption, showForm, svgList, updateTarget} = this.props;
    const {showAbout} = this.state;
    
    let body = null;
    if (!showAbout) {
      body = (
        <FormBody
          hideForm={hideForm}
          isChrome={isChrome}
          optionList={optionList}
          selectedTarget={selectedTarget}
          setOption={setOption}
          showForm={showForm}
          svgList={svgList}
          updateTarget={updateTarget}
        />
      );
    } else {
      body = <About />;
    }

    return (
      <div className={showForm ? "form-background" : "form-background form-background-hidden"}>
        <div className="form-container">
          <div className="form-inner-container">
            <FormTitle
              formTitle={!showAbout ? "Select SVG" : "About This Tho"}
              showAbout={showAbout}
              toggleAbout={this.toggleAbout}
            />
          {body}
          </div>
        </div>
      </div>
    );
  }
}

FormContainer.PropTypes = {
  hideForm: PropTypes.func,
  isChrome: PropTypes.bool,
  optionList: PropTypes.object,
  selectedTarget: PropTypes.string,
  setOption: PropTypes.func,
  showForm: PropTypes.bool,
  svgList: PropTypes.array,
  svgOptions: PropTypes.object,
  updateTarget: PropTypes.func,
}

export default FormContainer;
