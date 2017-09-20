import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

const FormOptions = ({optionList, setOption, showOptions}) => {
  const options = optionList.map((label, i) => {
    return <FormInput
      key={i}
      label={label}
      setOption={setOption}
    />;
  });

  return (
    <div className={showOptions ? "options-container" : "options-container options-container-hidden"}>
      {options}
    </div>
  );
}

FormOptions.PropTypes = {
  showOptions: PropTypes.bool,
}

export default FormOptions;
