import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../Icons/CloseIcon';

const ToggleIcon = ({showForm, toggleForm}) => {
  return (
    <div
      className="toggle-icon-container"
      onClick={(event) => toggleForm(event)}
    >
      <CloseIcon showForm={showForm} type="close-svg" />
    </div>
  );
}

ToggleIcon.propTypes = {
  toggleForm: PropTypes.func,
  showForm: PropTypes.bool,
}

export default ToggleIcon;
