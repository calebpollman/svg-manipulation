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

    this.toggleList = this.toggleList.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  updateSvgList = (svgList, selectedTarget) => {
    return svgList.filter((i) => {
      return i !== selectedTarget;
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

  selectOption = (e) => {
    e.preventDefault();
    let value = e.target.getAttribute('value');
    this.props.updateSelect(value);
    this.props.toggleOptions(true);
    this.toggleList();
    this.setState({
      selectedTarget: value
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
          onClick={(e) => this.selectOption(e)}
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
  selectedTarget: PropTypes.string.isRequired,
  svgList: PropTypes.array.isRequired,
  updateOption: PropTypes.func
}

export default FormSelect;
