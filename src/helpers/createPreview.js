const d3 = require('d3');

const createPreview = (target, input) => {
  // get viewBox
  const viewBox = input[0].svg[0].attributes.viewBox;
  
  // get pathArray
  const pathArray = input[7].path[0];

  // create svgPreview container
  const svgPreview = d3.select(target)
    .classed('svg-preview', true)
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', viewBox)
    .attr('display', 'block')
    .attr('margin', 'auto')
    .attr('overflow', 'visible')
    .classed('svg-content-responsive', true);

  for (let i = 0; i < pathArray.length; i++) {
    const attributes = pathArray[i].attributes;
    const fill = attributes.fill ? attributes.fill : '';
    const stroke = attributes.stroke ? attributes.stroke : '';
    const path = attributes.d;
    
    svgPreview.append('path')
      .attr('id', i)
      .attr('fill', fill)
      .attr('stroke-linejoin', 'round')
      .attr('stroke', stroke)
      .attr('d', path);
  } 
  
  return svgPreview;
}

export default createPreview;