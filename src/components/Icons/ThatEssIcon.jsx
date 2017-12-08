import React from 'react';
import PropTypes from 'prop-types';

const ThatEssIcon = ({showAbout}) => {
  return (
    <svg className={!showAbout ? "info-icon" : "info-icon info-icon-hidden"} width="10.7px" height="24px" viewBox="0 0 10.7 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.7,5.2L5.5,0L0,5.5v5.1L1.5,12L0,13.5v5.3L5.2,24l5.5-5.5v-5.1L9.2,12l1.5-1.5V5.2z M4.1,5.9v3.8l4.6,4.6v3.4l-3.5,3.5 L1.9,18v-3.7l0.9-0.9l1.8,1.8v3h1.9v-3.8L1.9,9.7V6.3l3.5-3.5L8.7,6v3.7l-0.9,0.9L6.1,8.9v-3H4.1z"/>
    </svg>
  );
}

ThatEssIcon.propTypes = {
  showAbout: PropTypes.bool,
}

export default ThatEssIcon;