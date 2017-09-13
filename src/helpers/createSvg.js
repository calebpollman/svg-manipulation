import getSvgInfo from './getSvgInfo';
import getPaths from './getPaths';
import getNewPath from './getNewPath';
import getRandomValue from './getRandomValue';

const d3 = require('d3');
const uuidv4 = require('uuid/v4');

const createSvg = (target, input) => {

  const svgInfo = getSvgInfo(input);
  let svgArray = getPaths(svgInfo);
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

  const svgGroup = svgContainer.append('g');
  let groupId = uuidv4();

  // check for groupFlag
  if (svgArray[0] === 'groupFlag') {
    for (var j = 1; j < svgArray.length; j++) {
      groupId = uuidv4();
      const pathArray = svgArray[j];
      for (var i = 0; i < pathArray.length; i++) {
        const path = pathArray[i];
        animatePath(svgGroup, groupId, path, i);
      }
    }
  } else {
    svgArray.forEach((path, i) => {
      return animatePath(svgGroup, groupId, path, i);
    });
  }
}

const animatePath = (svgGroup, groupId, path, i=0) => {
  const d = path[0].d;
  let fill = path[1].fill;
  const duration = parseInt(getRandomValue(9000, 6000, 0), 10);

  svgGroup.append('path')
    .attr('id', groupId + i)
    .attr('fill', fill === undefined ? 'black' : fill);

    document.getElementById(groupId + i).animate([
      // keyframes
      // second arg is modifier for getRandomValue
      { d: getNewPath(d, 40) },
      { d: getNewPath(d, 40) }
    ], {
      // animate options
      direction: 'alternate-reverse',
      // make setable
      duration: duration,
      iterations: Infinity
    });
}
export default createSvg;
