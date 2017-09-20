import getRandomValue from './getRandomValue';
import getNewPath from './getNewPath';
import getGradient from './getGradient';

const animateSvg = (svgGroup, groupId, path, i=0, svgContainer, options) => {
  // console.log(options);
  const d = path[0].d;
  const fill = path[1].fill === undefined ? '#000000' : path[1].fill;
  // last arg is base 10
  const duration = parseInt(getRandomValue(12000, 3000, 0), 10);
  getGradient(svgContainer, 'fill', fill, i, duration);
  getGradient(svgContainer, 'stroke', fill, i, duration);

  svgGroup.append('path')
    .attr('id', groupId + i)
    .attr('stroke-linejoin', 'round')
    // .attr('fill', fill === undefined ? 'black' : fill)
    .attr('strokeWidth', 10)
     // .attr('fill', `url(#fill${i})`)
    .attr('fill', 'none')
    .attr('stroke', `url(#fill${i})`)
    // .attr('stroke', `url(#stroke${i})`);

  const keyFrame = () => {
    return {
      // second arg is modifier for getRandomValue
      // d: getNewPath(d, 10),
      // stroke: 'teal',
      // strokeWidth: getRandomValue(0, 4, 2, false),
    }
  }

  document.getElementById(groupId + i).animate([
    keyFrame(), keyFrame()
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
