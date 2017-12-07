import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import CaretIcon from '../Icons/CaretIcon';

class FormSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      hasBeenOpened: false,
      selectedTarget: this.props.selectedTarget,
    }

    this.selectOption = this.selectOption.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  selectOption = (event) => {
    event.preventDefault();
    let value = event.target.getAttribute('value');
    this.props.toggleContents();
    this.props.updateSelect(value);
    this.setState({
      isOpen: false,
      selectedTarget: value,
    });
  }

  toggleList = (event) => {
    event.preventDefault();

    if (this.state.hasBeenOpened) {
      this.props.toggleContents();
    }

    this.setState({
      hasBeenOpened: true,
      isOpen: !this.state.isOpen,
    });
  }

  updateSvgList = (svgList, selectedTarget) => {
    return svgList.filter((svgTitle) => {
      return svgTitle !== selectedTarget;
    });
  }

  render() {
    let {svgList} = this.props;
    let {isOpen, selectedTarget} = this.state;

    svgList = this.updateSvgList(svgList, selectedTarget);

    svgList = svgList.map((item) => {
      return (
        <li
          className="option-text tk-europa"
          key={item}
          value={item}
          onClick={(event) => this.selectOption(event)}
        >
          {item}
        </li>
      );
    });

    return (
      <ul className={isOpen ? "form-select add-background" : "form-select"}>
        <li
          className="default-option option-text tk-europa"
          onClick={isOpen ? (event) => this.selectOption(event) : (event) => this.toggleList(event)}
          value={selectedTarget}
        >
          {selectedTarget}
          <CaretIcon isOpen={isOpen} value={selectedTarget} />
        </li>
        <div className={isOpen ? "open" : "closed"}>
          {svgList}
        </div>
      </ul>
    );
  }
}

FormSelect.propTypes = {
  selectedTarget: PropTypes.string,
  svgList: PropTypes.array,
  toggleContents: PropTypes.func,
  updateOption: PropTypes.func
}

export default FormSelect;
