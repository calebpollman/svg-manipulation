import React, {Component} from 'react';
import SvgContainer from "./Svg/SvgContainer";
import FormContainer from './Form/FormContainer';
import ToggleIcon from './ToggleIcon/ToggleIcon';
import staticSvgs from '../assets/staticSvgs/staticSvgs';
import optionList from '../helpers/optionList';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionList: optionList,
      resetSvg: false,
      selectedTarget: 'that water',
      showForm: true,
      svgList: [],
    };

    this.hideForm = this.hideForm.bind(this);
  }

  componentWillMount() {
    this.translateSvgList(staticSvgs);
  }

  hideForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  setOption = (type, label, checked) => {
    let optionList = this.state.optionList;
    optionList[type].value = checked;
    this.setState({optionList});
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
    const {optionList, resetSvg, selectedTarget, showForm, svgList} = this.state;

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
          updateOptions={this.updateOptions}
          updateTarget={this.updateTarget}
        />
        <SvgContainer
          selectedTarget={selectedTarget}
          resetSvg={resetSvg}
          optionList={optionList}
        />
      </div>
    );
  }
}

export default Index;
