import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../Icons/CloseIcon';
import SnapShotList from './SnapShotList';

const SideBar = ({showSideBar, snapShots, toggleSideBar}) => {
  return (
    <div className={showSideBar ? 'side-bar-container' : 'side-bar-container side-bar-container-hidden'}>
      <div 
        className="side-bar-close-container"
        onClick={toggleSideBar}
      >
        <CloseIcon showIcon={showSideBar} type="close-sidebar" />
      </div>
      <SnapShotList snapShots={snapShots} />
    </div>
  );
}

SideBar.propTypes = {
  showSideBar: PropTypes.bool,
  snapShots: PropTypes.array,
  toggleSideBar: PropTypes.func,
}

export default SideBar;