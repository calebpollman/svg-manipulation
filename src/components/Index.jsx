import React, {Component} from 'react';
import SvgContainer from "./Svg/SvgContainer";
import FormContainer from './Form/FormContainer';
import ToggleIcon from './ToggleIcon/ToggleIcon';
import staticSvgs from '../assets/staticSvgs/staticSvgs';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionList: ['Fill Gradients', 'Path Manipaluation', 'Path Gradients'],
      resetSvg: false,
      selectedTarget: 'that water',
      showForm: true,
      svgList: [],
      svgOptions: {},
    };

    this.hideForm = this.hideForm.bind(this);
  }

  componentWillMount() {
    this.initializeOptions(this.state.optionList);
    this.translateSvgList(staticSvgs);
  }

  hideForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
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
    this.setState({svgOptions});
  }

  translateSvgList = (staticSvgs) => {
    let i = 0, svgList = [];
    for (var key in staticSvgs) {
      svgList[i++] = key;
    }
    this.setState({svgList});
  }

  updateTarget = (input) => {
    this.setState({
      selectedTarget: input,
      resetSvg: !this.state.resetSvg,
    });
  }

  render() {
    const {optionList, resetSvg, selectedTarget, showForm, svgList, svgOptions} = this.state;

    return (
      <div className="main-container">
        <ToggleIcon
          hideForm={this.hideForm}
          showForm={showForm}
        />
        <FormContainer
          hideForm={this.hideForm}
          optionList={optionList}
          setOption={this.setOption}
          selectedTarget={selectedTarget}
          showForm={showForm}
          svgList={svgList}
          svgOptions={svgOptions}
          updateOptions={this.updateOptions}
          updateTarget={this.updateTarget}
        />
        <SvgContainer
          selectedTarget={selectedTarget}
          resetSvg={resetSvg}
          svgOptions={svgOptions}
        />
      </div>
    );
  }
}

export default Index;
