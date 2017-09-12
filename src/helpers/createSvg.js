import getSvgInfo from './getSvgInfo';
import getPaths from './getPaths';
import getNewPath from './getNewPath';
const d3 = require('d3');
const uuidv4 = require('uuid/v4');

const createSvg = (target, input) => {
  // d3.select(target).remove();

  const svgInfo = getSvgInfo(input);
  let pathArray = getPaths(svgInfo);
  console.log(pathArray);
  target.setAttribute('style','width:60%');
  const viewBox = svgInfo.svg.attributes.viewBox;

  // setup svg container
  const svgContainer = d3.select(target)
    .classed('svg-container', true)
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', viewBox)
    .attr('display', 'block')
    .attr('margin', 'auto')
    .attr('overflow', 'visible')
    .classed('svg-content-responsive', true);


  // check for groupFlag
  if (pathArray[0] === 'groupFlag' && typeof(pathArray[1]) === 'object') {
    // add group and iterate over paths
    pathArray = pathArray[1];
    const svgGroup = svgContainer.append('g');
    const groupId = uuidv4();

    for (var i = 0; i < pathArray.length; i++) {
      // const fillColor = pathArray[i];
      svgGroup.append('path')
        .attr('id', groupId + i)
        .attr('fill', 'black');

        document.getElementById(groupId + i).animate([
          // keyframes
          { d: getNewPath(pathArray[i]) },
          { d: getNewPath(pathArray[i]) }
        ], {
          // animate options
          direction: 'alternate-reverse',
          // randomize and make setable
          duration: 4000,
          iterations: Infinity
        });
    }
  }
}

export default createSvg;
