import React, {Component} from 'react';
import SvgContainer from "./Svg/SvgContainer";
import FormContainer from './Form/FormContainer';
import ToggleIcon from './ToggleIcon/ToggleIcon';
import staticSvgs from '../assets/staticSvgs/staticSvgs';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: true,
      svgList: [],
      selectedOption: 'large',
      resetSvg: false,
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

  updateOption = (input) => {
    this.setState({
      selectedOption: input,
      resetSvg: !this.state.resetSvg,
    });
  }

  hideForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    let {resetSvg, selectedOption, showForm, svgList} = this.state;

    return (
      <div className="main-container">
        <FormContainer
          hideForm={this.hideForm}
          showForm={showForm}
          selectedOption={selectedOption}
          svgList={svgList}
          updateOption={this.updateOption}
        />
        <ToggleIcon
          hideForm={this.hideForm}
          showForm={showForm}
        />
        <SvgContainer
          selectedOption={selectedOption}
          resetSvg={resetSvg}
        />
      </div>
    );
  }
}

export default Index;
