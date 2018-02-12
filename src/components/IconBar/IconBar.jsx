import React from 'react';
import PropTypes from 'prop-types';

import AddImageIcon from '../Icons/AddImageIcon';
import CloseIcon from '../Icons/CloseIcon';
import MenuIcon from '../Icons/MenuIcon';

const IconBar = ({showSideBar, showForm, takeSnapShot, toggleForm, toggleSideBar}) => {
  return (
    <div className="icon-bar-container">
      <div 
        className="icon-container"
        onClick={(event) => toggleSideBar(event)}
      >
        <MenuIcon showSideBar={showSideBar} />
      </div>
      <div 
        className="icon-container"
        onClick={(event) => takeSnapShot(event)}
      >
        <AddImageIcon />
      </div>
      <div
        className="icon-container"
        onClick={(event) => toggleForm(event)}
        title="Close SVG"
      >
        <CloseIcon showIcon={showForm} type="close-svg" />
      </div>
    </div>
  );
}

IconBar.propTypes = {
  showForm: PropTypes.bool,
  toggleForm: PropTypes.func,
}

export default IconBar;
