// returns string of new paths
const getNewPaths = (input) => {
  let fullPath = '';
  const pathBegin = 'path("';
  const pathEnd = 'z")';

  if (input[0] === 'groupFlag') {
    input = input[1];
  }

  for (var i = 0; i < input.length; i++) {
    // split paths into array by - char, commas, and letters
    let coordinateArray = input[i].split(/([-,|a-z])/gi);

    for (var j = 0; j < coordinateArray.length; j++) {
      // remove extra commas, empty strings, and z's from from array
      if (coordinateArray[j] === ',' || coordinateArray[j] === '' || coordinateArray[j] === 'z') {
          coordinateArray.splice(j, 1);
      }
      // check for non-integers
      let intCheck = parseFloat(coordinateArray[j]);

      if (!isNaN(intCheck)) {
        // get new value for coordinate
        coordinateArray[j] = getRandomValue(intCheck);
      }
    }

    // join coordinates to create new path
    let newPath = coordinateArray.join(',');
    // checks for letters, hyphens; removes leading and trailing commas
    for (var k = 0; k < newPath.length; k++) {
      if (newPath[k].match(/[-|a-z]/i)) {
        if (newPath[k - 1] === ',' && newPath[k + 1] === ',') {
          // removes both leading and trailing commas
          newPath = newPath.slice(0, k - 1) + newPath[k] + newPath.slice(k + 2);
          // resets k back to previous value to avoid skipping next character check
          k--;
        } else if (newPath[k + 1] === ',') {
          // removes trailing comma
          newPath = newPath.slice(0, k + 1) + newPath.slice(k + 2);
        } else if (newPath[k - 1] === ',') {
          // removes leading comma
          newPath = newPath.slice(0, k - 1) + newPath.slice(k);
        }
      }
      // check for duplicate hyphens and replace with white space
      if (newPath[k] === '-' && newPath[k + 1] === '-') {
        newPath = newPath.slice(0, k) + ' ' + newPath.slice(k + 2);
        k--;
      }
    }

    // concatenate newPaths
    fullPath += newPath;
  }
  return pathBegin + fullPath + pathEnd;
}

// returns random path values
const getRandomValue = (input) => {
  // maybe randomize rangeCap as well
  const rangeCap = 6;
  const minValue = input - rangeCap;
  const maxValue = input + rangeCap;
  return (Math.random() * (maxValue - minValue) + minValue).toFixed(3);
}

export default getNewPaths;
