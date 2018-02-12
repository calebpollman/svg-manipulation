import React, {Component} from 'react';

import getSvgInfo from '../helpers/getSvgInfo';
import optionList from '../helpers/optionList';
import staticSvgs from '../assets/staticSvgs/staticSvgs';

import FormContainer from './Form/FormContainer';
import SideBar from './SideBar/SideBar';
import SvgContainer from './Svg/SvgContainer';
import IconBar from './IconBar/IconBar';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChrome: null,
      optionList: optionList,
      resetPreview: false,
      resetSvg: false,
      selectedTarget: 'previous luxury',
      showForm: true,
      showSideBar: false,
      snapShots: [],
      svgInfo: null,
      svgList: [],
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.keyFormToggle = this.keyFormToggle.bind(this);
  }

  componentWillMount() {
    const {selectedTarget} = this.state;

    this.getPreviewInfo(selectedTarget);
    this.translateSvgList(staticSvgs);
    this.checkBrowser();

    document.addEventListener('keydown', this.keyFormToggle);
  }

  checkBrowser = () => {
    const browser = navigator.userAgent;
    let {isChrome} = this.state;

    if (browser.indexOf('Chrome') > -1) {
      isChrome = true;
    } else {
      isChrome = false;
    }

    this.setState({isChrome});
  }

  getPreviewInfo = (input) => { 
    const svgInfo = getSvgInfo(staticSvgs[input]);
    this.setState({svgInfo});
  }
  
  keyFormToggle = (event) => {
    if (event.keyCode === 27 && this.state.showForm === false) this.toggleForm(event);
  }

  setOption = (type, label, checked) => {
    let optionList = this.state.optionList;
    optionList[type].value = checked;
    this.setState({optionList});
  }

  takeSnapShot = (event) => {
    event.preventDefault();

    let {snapShots} = this.state;
    
    const snapShot = document.getElementById('main-svg').innerHTML;
    snapShots.push(snapShot);
    this.setState({snapShots});
  }

  toggleForm = (event) => {
    event.preventDefault();
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  toggleSideBar = (event) => {
    event.preventDefault();
  
    this.setState({
      showSideBar: !this.state.showSideBar,
    })
  }

  translateSvgList = (staticSvgs) => {
    let i = 0, svgList = [];
    for (var key in staticSvgs) {
      svgList[i++] = key;
    }
    this.setState({svgList});
  }

  updateTarget = (input, resetArg) => {
    this.getPreviewInfo(input);
    this.setState({
      selectedTarget: input,
      [resetArg]: !this.state[resetArg],
    });
  }

  render() {
    const {isChrome, optionList, resetSvg, selectedTarget, showForm, showSideBar, snapShots, svgInfo, svgList} = this.state;
    
    return (
      <div className="main-container">
        <SideBar 
          showSideBar={showSideBar}
          snapShots={snapShots}
          toggleSideBar={this.toggleSideBar}
        />
        <IconBar
          showSideBar={showSideBar}
          showForm={showForm}
          takeSnapShot={this.takeSnapShot}
          toggleForm={this.toggleForm}
          toggleSideBar={this.toggleSideBar}
        />
        <FormContainer
          getPreviewInfo={this.getPreviewInfo}
          isChrome={isChrome}
          optionList={optionList}
          setOption={this.setOption}
          selectedTarget={selectedTarget}
          showForm={showForm}
          svgInfo={svgInfo}
          svgList={svgList}
          toggleForm={this.toggleForm}
          updateTarget={this.updateTarget}
        />
        <SvgContainer
          optionList={optionList}
          resetSvg={resetSvg}
          svgInfo={svgInfo}
        />
      </div>
    );
  }
}

export default Index;
