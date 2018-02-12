import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createPreview from '../../helpers/createPreview';
import getSvgInfo from '../../helpers/getSvgInfo';

const d3 = require('d3');

class SnapShot extends Component {
  componentDidMount() {
    this.addSvg();
  }

  componentDidUpdate() {
    this.addSvg();
  }

  addSvg = () => {
    const {snapShot} = this.props;

    // clear prior svg
		d3.select(this.svg).html(null);

    // prevent actions if svgInfo is null
    const svgInfo = getSvgInfo(snapShot);
    const target = this.svg;
    createPreview(target, svgInfo)
  }
  render() {
    return (
      <div className="">
        <svg ref={(elem) => { this.svg = elem; }} />
      </div>
    );
  }
}

SnapShot.propTypes = {
  snapShot: PropTypes.string,
}

export default SnapShot;