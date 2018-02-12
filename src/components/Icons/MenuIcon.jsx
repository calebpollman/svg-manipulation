import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({showSideBar}) => {
  return (
    <svg className={showSideBar ? 'icon-bar-item icon-bar-item-hidden' : 'icon-bar-item'} fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  );
}

MenuIcon.propTypes = {
  showSideBar: PropTypes.bool,
}

export default MenuIcon;