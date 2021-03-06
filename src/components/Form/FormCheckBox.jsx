import React from 'react';
import PropTypes from 'prop-types';

const FormCheckBox = ({checked, disabled, handleClick, title}) => {
    
  let path = null, classNames = 'checkbox-icon ';
  if (checked) {
    classNames += 'check-icon';
    path = <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>;
  } else {
    classNames += 'outline-icon';
    path = <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>;
  }

  return (
    <div>
      <svg
        onClick={!disabled ? (event) => handleClick(event, title) : null}
        className={classNames}
        fill="#000000"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none"/>
        {path}
      </svg>
    </div>
  );
}

FormCheckBox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  title: PropTypes.string,
}

export default FormCheckBox;
