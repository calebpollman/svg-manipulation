import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

const FormOptions = ({isChrome, optionList, tempSelect, setOption, showContents, svgInfo}) => {
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
    <div className={showContents ? "options-container" : "options-container options-container-hidden"}>
      <div className="options-subcontainer">
        {options}
      </div>
    </div>
  );
}

FormOptions.propTypes = {
  isChrome: PropTypes.bool,
  optionList: PropTypes.object,
  setOption: PropTypes.func,
  showOptions: PropTypes.bool,
  tempSelect: PropTypes.string, 
}

export default FormOptions;
