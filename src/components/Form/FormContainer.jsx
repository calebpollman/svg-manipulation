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
    const {isChrome, optionList, selectedTarget, setOption, showForm, svgList} = this.props;
    const {showAbout} = this.state;

    let body = null;
    if (!showAbout) {
      body = (
        <FormBody
          idChrome={isChrome}
          optionList={optionList}
          selectedTarget={selectedTarget}
          setOption={setOption}
          svgList={svgList}
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
              formTitle={!showAbout ? "Select SVG" : "About this tho"}
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
  hideForm: PropTypes.func.isRequired,
  selectedTarget: PropTypes.string.isRequired,
  showForm: PropTypes.bool,
  svgList: PropTypes.array,
  svgOptions: PropTypes.object,
  updateOptions: PropTypes.func,
  updateTarget: PropTypes.func,
}

export default FormContainer;
