import getRandomValue from './getRandomValue';
import getNewPath from './getNewPath';
import getGradient from './getGradient';

const animateSvg = (svgGroup, groupId, pathObject, i=0, svgContainer, options) => {
  
  const path = pathObject.d;
  const fillColor = pathObject.fill === undefined ? '#000000' : pathObject.fill;
  const strokeColor = fillColor;
  const duration = parseInt(getRandomValue(12000, 3000, 0), 10);

  let fill = options['Fill Gradients'] ? getGradient(svgContainer, 'fill', fillColor, i) : fillColor;
  fill = options['Remove Fills'] ? 'none' : fill;

  const strokeWidth = () => options['Random Stroke Width'] ? getRandomValue(20, 20, 2, false) : 1;

  let stroke = options['Remove Strokes'] ? false : true;
  stroke = options['Stroke Gradients'] ? getGradient(svgContainer, 'stroke', strokeColor, i) : strokeColor;

  svgGroup.append('path')
    .attr('id', groupId + i)
    .attr('fill', fill)
    .attr('stroke-linejoin', 'round')
    .attr('stroke', stroke)
    // fallback path for non-chrome browsers
    .attr('d', path);

  const keyFrame = () => {
    return {
      d: options['Path Manipulation'] ? getNewPath(path, 10) : `path("${path}")`,
      strokeWidth: options['Remove Strokes'] ? 0 : strokeWidth(),
    }
  }

  document.getElementById(groupId + i).animate([
    keyFrame(), keyFrame(),
  ], {
    // animate options
    direction: 'alternate-reverse',
    // make setable
    duration: duration,
    iterations: Infinity,
    easing: 'ease-in-out',
  });
}

export default animateSvg;
