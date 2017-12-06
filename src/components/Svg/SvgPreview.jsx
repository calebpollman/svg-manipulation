import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createPreview from '../../helpers/createPreview';

const d3 = require('d3');

class SvgPreview extends Component {
  componentDidMount() {
    this.addSvg();
  }

  componentDidUpdate() {
    this.addSvg();
  }

  addSvg = () => {
    const {svgInfo} = this.props;
    // clear prior svg
		d3.select(this.svg).html(null);

    // prevent actions if svgInfo is null
    if (svgInfo) {      
      const target = this.svg;
      createPreview(target, svgInfo)
    }
  }

  render() {
    const {showContents} = this.props;

    return (
      <div className={showContents ? "svg-preview" : "svg-preview svg-preview-hidden"}>
        <svg ref={(elem) => { this.svg = elem; }} />
      </div>
    );
  }
}

SvgPreview.propTypes = {
  showContents: PropTypes.bool,
  svgInfo: PropTypes.array,
}

export default SvgPreview;
