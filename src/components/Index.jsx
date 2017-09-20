import React, {Component} from 'react';
import SvgContainer from "./Svg/SvgContainer";
import FormContainer from './Form/FormContainer';
import ToggleIcon from './ToggleIcon/ToggleIcon';
import staticSvgs from '../assets/staticSvgs/staticSvgs';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resetSvg: false,
      selectedTarget: 'that water',
      showForm: true,
      svgList: [],
      svgOptions: {},
    };

    this.hideForm = this.hideForm.bind(this);
  }

  componentWillMount() {
    this.translateSvgList(staticSvgs);
  }

  translateSvgList = (staticSvgs) => {
    let i = 0, svgList = [];
    for (var key in staticSvgs) {
      svgList[i++] = key;
    }
    this.setState({svgList});
  }

  updateOptions = (svgOptions) => {
    this.setState({svgOptions});
  }

  updateTarget = (input) => {
    this.setState({
      selectedTarget: input,
      resetSvg: !this.state.resetSvg,
    });
  }

  hideForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    const {resetSvg, selectedTarget, showForm, svgList, svgOptions} = this.state;

    return (
      <div className="main-container">
        <FormContainer
          hideForm={this.hideForm}
          showForm={showForm}
          selectedTarget={selectedTarget}
          svgList={svgList}
          svgOptions={svgOptions}
          updateOptions={this.updateOptions}
          updateTarget={this.updateTarget}
        />
        <ToggleIcon
          hideForm={this.hideForm}
          showForm={showForm}
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
