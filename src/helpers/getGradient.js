const getGradient = (svgContainer, fill, i, duration) => {
  const defs = svgContainer.append('defs');
  const colors = getColors(fill);

  const linearGradient = defs.append('linearGradient')
	.attr('id',`svgGradient${i}`)
	.attr('x1','0%')
	.attr('y1','0%')
	.attr('x2','100%')
	.attr('y2','0')
	.attr('spreadMethod', 'repeat');

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
}

// REFACTOR
const getColors = (fill) => {
  let colors = [];
  let increment = 0.0;

  if (fill === '#000000' || fill === '#ffffff') {
    for (var j = 0; j <= 8; j++) {
      colors.push(fill);
    }
    return colors;
  }

  for (var i = 0; i <= 8; i++) {
    const color = shadeColor(fill, increment);
    colors.push(color);
    increment += -0.1;
  }
  return colors;
}

const shadeColor = (color, percent) => {
  const f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return '#'+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

export default getGradient;
