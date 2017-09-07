const d3 = require('d3');

const animateSvg = (target, svgInfo, frameOne, frameTwo) => {

  target.setAttribute('style','width:60%');

  const viewBox = svgInfo.svg.attributes.viewBox;

  const svgContainer = d3.select(target)
    .classed('svg-container', true)
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', viewBox)
    .attr('display', 'block')
    .attr('margin', 'auto')
    .attr('overflow', 'visible')
    .classed('svg-content-responsive', true);

  const svgGroup = svgContainer.append('g');

  svgGroup.append('path')
    .attr('id', 'svg-id')
    .attr('fill', 'black');

  document.getElementById('svg-id').animate([
    // keyframes
    { d: frameOne },
    { d: frameTwo }
  ], {
    // animate options
    direction: 'alternate-reverse',
    duration: 4000,
    iterations: Infinity
  });
}

export default animateSvg;
