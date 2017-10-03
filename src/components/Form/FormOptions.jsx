import React from 'react';
import PropTypes from 'prop-types';
import SvgPreview from '../Svg/SvgPreview';
import FormInput from './FormInput';

const FormOptions = ({optionList, tempSelect, setOption, showOptions}) => {
  optionList = Object.entries(optionList);
  const options = optionList.map((option, i) => {
    return <FormInput
      key={i}
      label={option[1].title}
      setOption={setOption}
      type={option[0]}
      value={option[1].value}
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
