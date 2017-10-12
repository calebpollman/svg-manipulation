import React from 'react';
import PropTypes from 'prop-types';

const ThatEss = ({showForm}) => {
  return (
    <svg className={!showForm ? "toggle-icon" : "toggle-icon toggle-icon-hidden"} height="45.4" viewBox="0 0 19.5 45.4" width="19" xmlns="http://www.w3.org/2000/svg">
      <g>
        <polygon points="11.2,34 9.2,34 9.2,28.6 0,19.3 0,10 10,0 19.5,9.5 19.5,19.3 15.2,23.6 13.8,22.2 17.5,18.5 17.5,10.3 10,2.8
      		2,10.8 2,18.5 11.2,27.8 	"/>
      	<polygon points="9.5,45.4 0,35.9 0,26 4.3,21.7 5.7,23.2 2,26.9 2,35 9.5,42.5 17.5,34.5 17.5,26.9 8.2,17.6 8.2,11.4 10.2,11.4
      		10.2,16.8 19.5,26 19.5,35.4 	"/>
      </g>
    </svg>
  );
}

ThatEss.PropTypes = {
  showForm: PropTypes.func,
}

export default ThatEss;
