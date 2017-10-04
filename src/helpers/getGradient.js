import getRandomValue from './getRandomValue';

const getGradient = (svgContainer, type, fill, i) => {

  const colorQuantity = getRandomValue(4, 1, 0, false);
  const colors = getColors(fill, colorQuantity);
  const duration = parseInt(getRandomValue(9000, 3000, 0), 10);

  const defs = svgContainer.append('defs');

  const linearGradient = defs.append('linearGradient')
  	.attr('id', type + i)
    .attr('x1', `${getRandomValue(50, 50, 0, false)}%`)
    .attr('y1', `${getRandomValue(50, 50, 0, false)}%`)
    .attr('x2', `${getRandomValue(50, 50, 0, false)}%`)
    .attr('y2', `${getRandomValue(50, 50, 0, false)}%`)
  	.attr('spreadMethod', 'pad');

  linearGradient.selectAll('.stop')
  	.data(colors)
  	.enter().append('stop')
  	.attr('offset', (d,i) => { return i/(colors.length-1); })
  	.attr('stop-color', (d) => { return d; });

  linearGradient.append('animate')
  	.attr('attributeName','x2')
  	.attr('values','100%;200%')
  	.attr('dur', duration)
  	.attr('repeatCount','indefinite');

  return `url(#${type}${i})`;
}

const getColors = (fill, colorQuantity) => {
  let colors = new Array(colorQuantity).fill();
  let increment = 0.0;

  colors = colors.map((i) => {
    i = shadeColor(fill, increment);
    increment += -0.1;
    return i;
  });

  return colors;
}

const shadeColor = (color, percent) => {
  const f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=(f>>8)&0x00FF,B=f&0x0000FF;
  return '#'+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

export default getGradient;
