import getRandomValue from './getRandomValue';
import getNewPath from './getNewPath';
import getGradient from './getGradient';

const animateSvg = (svgGroup, groupId, path, i=0, svgContainer, options) => {

  const fillColor = path[1].fill === undefined ? '#000000' : path[1].fill;
  const strokeColor = fillColor;
  const duration = parseInt(getRandomValue(12000, 3000, 0), 10);

  const d = path[0].d;

  let fill = options['Fill Gradients'] ? getGradient(svgContainer, 'fill', fillColor, i, duration) : fillColor;
  fill = options['Remove Fills'] ? 'none' : fill;

  let strokeWidth = options['Random Stroke Width'] ? getRandomValue(0, 4, 2, false) : 2;
  strokeWidth = options['Remove Strokes'] ? 0 : strokeWidth;

  let stroke = options['Remove Strokes'] ? false : true;
  stroke = options['Stroke Gradients'] ? getGradient(svgContainer, 'stroke', strokeColor, i, duration) : strokeColor;

  svgGroup.append('path')
    .attr('id', groupId + i)
    .attr('fill', fill)
    .attr('stroke-linejoin', 'round')
    .attr('stroke', stroke)

  const keyFrame = () => {
    return {
      d: options['Path Manipulation'] ? getNewPath(d, 10) : `path("${d}")`,
      // d: getNewPath(d, 10),
      strokeWidth: strokeWidth,
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
