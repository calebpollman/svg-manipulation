import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import ExpandIcon from '../Icons/ExpandIcon';
import ShrinkIcon from '../Icons/ShrinkIcon';

class FormSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedOption: this.props.selectedOption,
    }

    this.toggleIcon = this.toggleIcon.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  updateSvgList = (svgList, selectedOption) => {
    return svgList.filter((i) => {
      return i !== selectedOption;
    });
  }

  toggleIcon = () => {
    this.props.hideButton();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  selectOption = (e) => {
    e.preventDefault();
    let value = e.target.getAttribute('value');
    this.props.updateSelect(value);
    this.toggleIcon();
    this.setState({
      selectedOption: value
    });
  }

  render() {
    let {svgList} = this.props;
    let {isOpen, selectedOption} = this.state;

    const newSvgList = this.updateSvgList(svgList, selectedOption);

    const svgOptions = newSvgList.map((i) => {
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
            onClick={this.toggleIcon}
          >
            {selectedOption}
            {isOpen ? <ShrinkIcon /> : <ExpandIcon />}
          </li>
          <div className={isOpen ? "open" : "closed"}>
            {svgOptions}
          </div>
        </ul>
    );
  }
}

FormSelect.PropTypes = {
  selectedOption: PropTypes.string.isRequired,
  svgList: PropTypes.array.isRequired,
  updateOption: PropTypes.func
}

export default FormSelect;
