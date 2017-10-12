import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import ExpandIcon from '../Icons/ExpandIcon';
import ShrinkIcon from '../Icons/ShrinkIcon';

class FormSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedTarget: this.props.selectedTarget,
    }

    this.selectOption = this.selectOption.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  selectOption = (event) => {
    event.preventDefault();
    let value = event.target.getAttribute('value');
    this.props.updateSelect(value);
    this.props.toggleOptions(true);
    this.toggleList();
    this.setState({
      selectedTarget: value
    });
  }

  toggleList = () => {
    const isOpen = this.state.isOpen;
    this.props.toggleOptions(isOpen);
    this.props.hideButton();
    this.setState({
      isOpen: !isOpen,
    });
  }

  updateSvgList = (svgList, selectedTarget) => {
    return svgList.filter((i) => {
      return i !== selectedTarget;
    });
  }

  render() {
    let {svgList} = this.props;
    let {isOpen, selectedTarget} = this.state;

    const newSvgList = this.updateSvgList(svgList, selectedTarget);

    const list = newSvgList.map((i) => {
      return (
        <li
          className="option-text tk-europa"
          key={i}
          value={i}
          onClick={(event) => this.selectOption(event)}
        >
          {i}
        </li>
      );
    });

    return (
      <ul className={isOpen ? "form-select add-background" : "form-select"}>
        <li
          className="default-option option-text tk-europa"
          onClick={this.toggleList}
        >
          {selectedTarget}
          {isOpen ? <ShrinkIcon /> : <ExpandIcon />}
        </li>
        <div className={isOpen ? "open" : "closed"}>
          {list}
        </div>
      </ul>
    );
  }
}

FormSelect.PropTypes = {
  hideButton: PropTypes.bool,
  selectedTarget: PropTypes.string,
  svgList: PropTypes.array,
  toggleOptions: PropTypes.func,
  updateOption: PropTypes.func
}

export default FormSelect;
