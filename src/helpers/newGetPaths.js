const _ = require('lodash');

// GET ALL ATTRIBUTES FROM PATH

const getPaths = (input) => {
  let pathArray = [];
  const paths = input[0];
  pathArray = paths.map((i) => {
    const path = i.attributes.d;
    return path;
  })
  console.log(pathArray);
  // const groupCheck = groupsAndPaths[0].groups;
  // const pathCheck = groupsAndPaths[0].path;
  // let multiPathCheck = _.get(groupsAndPaths, '[0].groups.path');

  // if (multiPathCheck !== undefined) {
  //   multiPathCheck = multiPathCheck.length;
  // }

  // if (groupCheck !== undefined) {
  //   pathArray.push('groupFlag');

  //   if (groupsAndPaths.length > 1 || multiPathCheck !== undefined) {
  //     // group with multiple groups
  //     for (var i = 0; i < groupsAndPaths.length; i++) {
  //       const paths = groupsAndPaths[i].groups.path;
  //       if (paths.length !== undefined) {
  //         let tempArray = paths.map((i) => {
  //           return [{d: i.attributes.d}, {fill: i.attributes.fill}];
  //         });
  //         pathArray.push(tempArray);
  //       }
  //     }
  //   } else {
  //     // group with one path
  //     const d = groupsAndPaths[0].groups.path.attributes.d;
  //     const fill = groupsAndPaths[0].groups.path.attributes.fill;
  //     pathArray.push([[{d: d}, {fill: fill}]]);
  //   }
  // } else if (pathCheck !== undefined) {
  //   pathArray = groupsAndPaths.map((i) => {
  //     return [{d: i.path.attributes.d}, {fill: i.path.attributes.fill}];
  //   });
  // } else {
  //   pathArray.push('No paths or groups present.');
  // }

  // return pathArray;
}

export default getPaths;
