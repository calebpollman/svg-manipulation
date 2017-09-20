import getSvgInfo from './getSvgInfo';
import getPaths from './getPaths';
import animateSvg from './animateSvg';

const d3 = require('d3');
const uuidv4 = require('uuid/v4');

const createSvg = (target, input, options) => {

  const svgInfo = getSvgInfo(input);
  const svgArray = getPaths(svgInfo);
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

  // firefox test svg
  // const testPath = "M368.871 29.052c14.202-1.627 23.306-15.199 16.053-2.314C379.429 28.985 375.919 28.693 377.671 32.203z";
  // const testPath2 = "M363.346 177.577c2.379-6.789 7.187-6.074 11.054-9.282c.811 .905 .171 -.876 .102 9.952c-2.836 4.493-0.293 11.579-20.791 -0.903C377.087 164.723 377.552 169.146 372.234 176.532z";
  //
  // svgGroup.append('path')
  //   .attr('id', 'temp')
  //   .attr('fill', 'black')
  //   .attr('d', testPath)
  //
  // let svgPath = document.getElementById('temp');
  //
  // svgPath.animate([
  //   {'fill': 'black'},
  //   {'fill': 'red'}
  // ],{
  //   direction: 'alternate-reverse',
  //   duration: 2000,
  //   iterations: Infinity,
  //   easing: 'ease-in-out',
  // })

  let groupId = uuidv4();

  // check for groupFlag
  if (svgArray[0] === 'groupFlag') {
    for (var j = 1; j < svgArray.length; j++) {
      groupId = uuidv4();
      const pathArray = svgArray[j];
      for (var i = 0; i < pathArray.length; i++) {
        const path = pathArray[i];
        animateSvg(svgGroup, groupId, path, i, svgContainer, options);
      }
    }
  } else {
    svgArray.forEach((path, i) => {
      return animateSvg(svgGroup, groupId, path, i, svgContainer, options);
    });
  }
}

export default createSvg;
