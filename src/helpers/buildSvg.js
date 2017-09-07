import getSvgInfo from '../helpers/getSvgInfo';
import getPaths from '../helpers/getPaths';
import getNewPaths from '../helpers/getNewPaths';
import animateSvg from '../helpers/animateSvg';

// prepopulated svgs for testing
// import staticSvgs from '../assets/staticSvgs/staticSvgs';

const buildSvg = (target, input) => {

  const svgInfo = getSvgInfo(input);

  const pathArray = getPaths(svgInfo);

  const frameOne = getNewPaths(pathArray);
  const frameTwo = getNewPaths(pathArray);

  animateSvg(target, svgInfo, frameOne, frameTwo);
}

export default buildSvg;
