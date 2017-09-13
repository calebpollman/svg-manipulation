// used to pull ony these attributes from the svg, groups, paths, etc.
const svgAttributes = ['class', 'd', 'id', 'viewBox', 'fill', 'fill-opacity', 'fill-rule', 'style', 'stroke'];

// returns javascript object with svg elements and attributes
const getSvgInfo = (input) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, "image/svg+xml");
  const svgJson = xmlToJson(doc);
  const svgObject = getTarget(svgJson, 'svg');

  const svgAttrs = svgObject.attributes;

  // WHAT ABOUT RECTS, CIRCLES, ETC ????????
  const svgGroups = getSvgGroupsAndPaths(svgObject);

  const finalSvgObject = {
    svg: {
      attributes: svgAttrs,
      groupsAndPaths: svgGroups,
    }
  }
  return finalSvgObject;
}

const getSvgGroupsAndPaths = (input) => {
  let groupsAndPaths = [];
  const groups = input.g;

  if (groups !== undefined) {
    if (groups.length !== undefined) {
      for (const key in Object.keys(groups)) {
        const group = groups[key];
        groupsAndPaths.push({
          groups: {
            attrs: getAttributes(group, svgAttributes),
            path: group.path,
          }
        });
      }
    } else {
      groupsAndPaths.push({
        groups: {
          attrs: getAttributes(groups, svgAttributes),
          path: groups.path,
        }
      });
    }
  } else {
    const paths = input.path;
    if (paths.length !== undefined) {
      for (const i in Object.keys(paths)) {
        groupsAndPaths.push({
          path: paths[i],
        });
      }
    } else {
      groupsAndPaths.push({
        path: paths,
      });
    }
  }
  return groupsAndPaths;
}

const getAttributes = (input, attrs) => {
  let attrObj = {};
  for (const key of Object.keys(input)) {
    for (var i = 0; i < attrs.length; i++) {
      if (key === attrs[i]) {
        attrObj[key] = input[key];
      }
    }
  }
  return attrObj;
}

// get svg root
const getTarget = (input, target) => {
  for (const key of Object.keys(input)) {
    if (key !== '0' && typeof(input) === 'object') {
      const temp = input[key];
      if (key !== target) {
        getTarget(temp, target);
      } else {
        return temp;
      }
    }
  }
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
