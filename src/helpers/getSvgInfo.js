// returns javascript object with svg elements and attributes
const getSvgInfo = (input) => {

  const parser = new DOMParser();
  const doc = parser.parseFromString(input, "image/svg+xml");
  const svgJson = xmlToJson(doc);

  let svgAndShapeList = ['svg', 'rect', 'line', 'polyline', 'circle', 'ellipse', 'polygon', 'path', 'style'];
  svgAndShapeList = svgAndShapeList.map((i) => {
    return {[i]: getTargets(svgJson, i)};
  })

  return svgAndShapeList;
}

// iterates over input, gets target objects, and returns targetArray
const getTargets = (input, target, targetArray = []) => {
  for (const key of Object.keys(input)) {
    const temp = input[key];
    if (typeof(temp) === 'object') {
      if (key === target) {
        targetArray.push(temp);
      } else {
        getTargets(temp, target, targetArray);
      }
    }
  }
  return targetArray;
}

// Changes XML to JSON
const xmlToJson = (xml) => {
	// Create the return object
	let obj = {};

	if (xml.nodeType === 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj['attributes'] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				const attribute = xml.attributes.item(j);
				obj['attributes'][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType === 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for (var i = 0; i < xml.childNodes.length; i++) {
			const item = xml.childNodes.item(i);
			const nodeName = item.nodeName;
			if (typeof(obj[nodeName]) === 'undefined') {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) === 'undefined') {
					const old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

export default getSvgInfo;
