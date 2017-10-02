import React from 'react';
import PropTypes from 'prop-types';
import SvgPreview from '../Svg/SvgPreview';
import FormInput from './FormInput';

const FormOptions = ({optionList, tempSelect, setOption, showOptions}) => {
  const options = optionList.map((label, i) => {
    return <FormInput
      key={i}
      label={label}
      setOption={setOption}
    />;
  });

  return (
    <div className={showOptions ? "options-container" : "options-container options-container-hidden"}>
      <SvgPreview tempSelect={tempSelect} />
      {options}
    </div>
  );
}

FormOptions.PropTypes = {
  showOptions: PropTypes.bool,
}

export default FormOptions;
