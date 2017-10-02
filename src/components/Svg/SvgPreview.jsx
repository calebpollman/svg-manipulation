import React, {Component} from 'react';
import PropTypes from 'prop-types';
import staticSvgs from '../../assets/staticSvgs/staticSvgs';

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
    target.innerHTML = preview;
  }

  render() {
    return (
      <div className="preview-svg" ref={(elem) => { this.svg = elem; }} />
    );
  }
}

SvgPreview.PropTypes = {
  tempSelect: PropTypes.string,
}

export default SvgPreview;
