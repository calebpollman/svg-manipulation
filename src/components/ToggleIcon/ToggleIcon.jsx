import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../Icons/CloseIcon';
import OpenIcon from '../Icons/OpenIcon';

class ToggleIcon extends Component {

  hideForm = () => {
    this.props.hideForm();
  }

  render() {
    const {showForm} = this.props;

    return (
      <div
        className="toggle-icon-container"
        onClick={this.hideForm}
      >
        {showForm ? <CloseIcon /> : <OpenIcon />}
      </div>
    );
  }
}

ToggleIcon.PropTypes = {
  hideForm: PropTypes.func,
  showForm: PropTypes.bool
}

export default ToggleIcon;
