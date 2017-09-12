const getPaths = (input) => {
  let pathArray = [];
  const groupsAndPaths = input.svg.groupsAndPaths;
  const groupCheck = groupsAndPaths[0].groups;
  const pathCheck = groupsAndPaths[0].path;

  if (groupCheck !== undefined) {
    const paths = groupCheck.path;
    pathArray.push('groupFlag');
    // check for multiple paths in group
    if (paths.length !== undefined) {
      let tempArray = paths.map((i) => {
        return i.attributes.d;
      });
      pathArray.push(tempArray);
    } else {
      pathArray.push(paths.attributes.d);
    }

  } else if (pathCheck !== undefined) {
    pathArray = groupsAndPaths.map((i) => {
      return i.path.attributes.d;
    });
  } else {
    pathArray.push('No paths or groups present.');
  }

  return pathArray;
}

export default getPaths;
