const handleOptions = (options) => {
  let optionList = {};

  Object.entries(options).forEach((option) => {
    const title = option[1].title;
    const value = option[1].value;
    optionList[title] = value;
  });
  
  return optionList;
}

export default handleOptions;
