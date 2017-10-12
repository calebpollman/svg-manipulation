import React from 'react';
import PropTypes from 'prop-types';
import SvgPreview from '../Svg/SvgPreview';
import FormInput from './FormInput';

const FormOptions = ({isChrome, optionList, tempSelect, setOption, showOptions}) => {
  optionList = Object.entries(optionList);
  const options = optionList.map((option, i) => {
    const title = option[1].title;
    let value = option[1].value;
    const disabled = !isChrome && title === 'Path Manipulation';
    value = disabled ? false : value;

    return <FormInput
      disabled={disabled}
      key={i}
      title={title}
      setOption={setOption}
      type={option[0]}
      value={value}
    />;
  });

  return (
    <div className={showOptions ? "options-container" : "options-container options-container-hidden"}>
      <SvgPreview tempSelect={tempSelect} />
      <div className="options-subcontainer">
        {options}
      </div>
    </div>
  );
}

FormOptions.PropTypes = {
  isChrome: PropTypes.bool,
  optionList: PropTypes.object,
  setOption: PropTypes.func,
  showOptions: PropTypes.bool,
  tempSelect: PropTypes.string, 
}

export default FormOptions;
