import getSvgInfo from './getSvgInfo';
import getPaths from './getPaths';
import animateSvg from './animateSvg';
import handleOptions from './handleOptions';

const d3 = require('d3');
const uuidv4 = require('uuid/v4');

const createSvg = (target, svgInfo, options) => {
  options = handleOptions(options);
  const svgArray = getPaths(svgInfo);
  const viewBox = svgInfo[0].svg[0].attributes.viewBox;

  target.setAttribute('style','width:60%');

  // setup svg container
  const svgContainer = d3.select(target)
    .classed('svg-container', true)
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', viewBox)
    .attr('display', 'block')
    .attr('margin', 'auto')
    .attr('overflow', 'visible')
    .classed('svg-content-responsive', true);

  svgArray.map((i, x) => {
    const groupId = uuidv4();
    return animateSvg(svgContainer, groupId, i, x, options);
  })
}

export default createSvg;
