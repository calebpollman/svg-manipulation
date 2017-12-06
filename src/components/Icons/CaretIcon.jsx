import React from 'react';
import {PropTypes} from 'prop-types';

const CaretIcon = ({isOpen, value}) => {
    return (
        <svg className={isOpen ? "select-icon select-icon-open" : "select-icon"} value={value} fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path value={value} d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
        </svg>
    );
}

CaretIcon.propTypes = {
    isOpen: PropTypes.bool,
    value: PropTypes.string,
}

export default CaretIcon;
