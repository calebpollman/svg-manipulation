import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ThatEssIcon from '../Icons/ThatEssIcon';

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
        <ThatEssIcon showForm={showForm} />
      </div>
    );
  }
}

ToggleIcon.PropTypes = {
  hideForm: PropTypes.func,
  showForm: PropTypes.bool
}

export default ToggleIcon;
