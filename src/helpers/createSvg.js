import getSvgInfo from './getSvgInfo';
import getPaths from './getPaths';
import animateSvg from './animateSvg';
import handleOptions from './handleOptions';

import newGetSvgInfo from './newGetSvgInfo';
import svgFiles from '../assets/staticSvgs/staticSvgs';
const testInput = svgFiles['test test'];
newGetSvgInfo(testInput);

const d3 = require('d3');
const uuidv4 = require('uuid/v4');

const createSvg = (target, input, options) => {
  options = handleOptions(options);
  const svgInfo = getSvgInfo(input);
  console.log(svgInfo);
  // const svgArray = getPaths(svgInfo);
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
        // animateSvg(svgGroup, groupId, path, i, svgContainer, options);
      }
    }
  } else {
    svgArray.forEach((path, i) => {
      // return animateSvg(svgGroup, groupId, path, i, svgContainer, options);
    });
  }
}

export default createSvg;
