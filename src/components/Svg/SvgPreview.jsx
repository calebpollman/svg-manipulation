import React, {Component} from 'react';
import PropTypes from 'prop-types';
import staticSvgs from '../../assets/staticSvgs/staticSvgs';
import getSvgInfo from '../../helpers/getSvgInfo';
import getPaths from '../../helpers/getPaths';
const d3 = require('d3');

class SvgPreview extends Component {
  componentDidMount() {
    this.addSvg();
  }

  componentDidUpdate() {
    this.addSvg();
  }

  addSvg = () => {
    const {tempSelect} = this.props;
    const preview = staticSvgs[tempSelect];
    const target = this.svg;
    const svgInfo = getSvgInfo(preview);
    target.innerHTML = preview;

    const viewBox = svgInfo.svg.attributes.viewBox;
    const svgArray = getPaths(svgInfo);
    console.log(svgArray);
    const svgContainer = d3.select(target)
      .classed('svg-container', true)
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', viewBox)
      .attr('display', 'block')
      .attr('margin', 'auto')
      .attr('overflow', 'visible')
      .classed('svg-content-responsive', true);
  }

  render () {
    return (
      <div className="preview-svg" ref={(elem) => { this.svg = elem; }} />
    );
  }
}

SvgPreview.PropTypes = {
  tempSelect: PropTypes.string,
}

export default SvgPreview;
