import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

class FormOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionList: ['Fill Gradients', 'Path Manipaluation', 'Path Gradients'],
      svgOptions: {},
    }

    this.setOption = this.setOption.bind(this);
  }

  componentDidMount() {
    this.initializeOptions(this.state.optionList);
  }

  initializeOptions = (optionList) => {
    const svgOptions = optionList.reduce((values, option, i) => {
      values[option] = true;
      return values;
    }, {});
    this.setState({svgOptions});
  }

  setOption = (label, checked) => {
    let svgOptions = this.state.svgOptions;
    svgOptions[label] = checked;
    this.props.updateOptions(svgOptions);
    this.setState({svgOptions});
  }

  render() {
    const {showOptions} = this.props;
    const {optionList} = this.state;

    const options = optionList.map((label, i) => {
      return <FormInput
        key={i}
        label={label}
        setOption={this.setOption}
      />;
    });

    return (
      <div className={showOptions ? "options-container" : "options-container options-container-hidden"}>
        {options}
      </div>
    );
  }
}

FormOptions.PropTypes = {
  showOptions: PropTypes.bool,
}

export default FormOptions;
