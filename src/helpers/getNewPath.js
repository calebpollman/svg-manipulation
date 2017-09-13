import getRandomValue from './getRandomValue';

// returns string of new paths
const getNewPath = (input, modifier) => {
  // values for getRandomValue
  const precision = 3;
  let path = '';
  const pathBegin = 'path("';
  const pathEnd = 'z")';

  let charPositions = [];
  let commandStrings = [];

  // get index positions of all chars in path array
  for (var ai = 0; ai < input.length; ai++) {
    if (input[ai].match(/[amlchv]/i)) {
      charPositions.push(ai);
    }
  }

  // create substrings containing svg commnands and corresponding coordinates
  for (var aj = 0; aj < charPositions.length; aj++) {
    const commandString = input.substring(charPositions[aj], charPositions[aj + 1]);
    commandStrings.push(commandString);
  }

  // break sommand substrings in to arrays containing command char, hyphens, and corresponding coordinates
  commandStrings = commandStrings.map((command) => {
    let coordinates = command.split(/([\s-,|mlhvzcsqta])/i);
    return coordinates.filter((coordinate) => {
      return coordinate.toLowerCase() !== coordinate.toUpperCase() || coordinate === '-' || !isNaN(parseFloat(coordinate));
    });
  });

  const cleanedValues = commandStrings.map((command) => {
    return handleConcatenatedValues(command);
  });

  for (var x = 0; x < cleanedValues.length; x++) {
    let value = cleanedValues[x];
    for (var y = 0; y < value.length; y++) {
      let intCheck = parseFloat(value[y]);
      if (!isNaN(intCheck)) {
        // add values of 0 and 1 to path without randomizing
        if (intCheck === 0 || intCheck === 1) {
          path += intCheck + ' ';

        // handle values between -1 and 1 and not equal to 0
        } else if (intCheck < 1  && intCheck > -1) {
          let newCoordinate =  getRandomValue(intCheck, modifier, precision);
          newCoordinate = newCoordinate.toString();

          // remove trailing 0 after hyphen
          if (newCoordinate[0] === '-') {
            path += newCoordinate.slice(0, 1) + newCoordinate.slice(2) + ' ';

          // remove leading 0
          } else {
            path += newCoordinate.substring(1, newCoordinate.length) + ' ';
          }
        } else {
          let newCoordinate =  getRandomValue(intCheck, modifier, precision);
          path += newCoordinate + ' ';
        }
      } else if (value[y] === '-' && value[y - 1].match(/[mlhvzcsqta]/) === null) {
        // remove trailing space if value[y] === '-'
        path = path.slice(0, -1) + '-';
        // console.log('new:', path);
      } else if (value[y].toLowerCase() !== value[y].toUpperCase()){
        // console.log(value[y])
        path = path.slice(0, -1) + value[y];
      } else {
        path += value[y];
      }
    }
  }

  path = path.replace(/--/g, '-');
  return pathBegin + path + pathEnd;
}

// checks command for strings with concatenated floats and formats them accordingly
const handleConcatenatedValues = (command) => {
  let commandArray = [];
  for (var an = 0; an < command.length; an++) {

    // check for multiple periods
    if (command[an].split('.').length > 2) {
      let dotIndices = [];

      // get positions of periods
      for (var ak = 0; ak < command[an].length; ak++) {
        if (command[an][ak] === '.') {
          dotIndices.push(ak);
        }
      }

      // formats values and pushes to commandArray
      if (command[an][0] !== '.') {
        for (var al = 0; al < dotIndices.length; al++) {
          if (al === 0) {
            // pushes first value of command if it contains number to the left of first period
            commandArray.push(command[an].substring(0, dotIndices[al + 1]));
          } else {
            commandArray.push(command[an].substring(dotIndices[al], dotIndices[al + 1]));
          }
        }
      } else {
        // pushes float values to commandArray
        for (var ao = 0; ao < dotIndices.length; ao++) {
          commandArray.push(command[an].substring(dotIndices[ao], dotIndices[ao + 1]));
        }
      }
    } else {
      // if command does contain values with multiple floats pushes commandArray to commandArray
      commandArray.push(command[an]);
    }
  }
  return commandArray;
}

export default getNewPath;
