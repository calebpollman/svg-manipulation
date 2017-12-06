import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ThatEssIcon from '../Icons/ThatEssIcon';

class ToggleIcon extends Component {

  toggleForm = () => {
    this.props.toggleForm();
  }

  render() {
    const {showForm} = this.props;

    return (
      <div
        className="toggle-icon-container"
        onClick={this.toggleForm}
      >
        <ThatEssIcon showForm={showForm} />
      </div>
    );
  }
}

ToggleIcon.propTypes = {
  toggleForm: PropTypes.func,
  showForm: PropTypes.bool,
}

export default ToggleIcon;
