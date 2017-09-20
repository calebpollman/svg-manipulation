import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createSvg from '../../helpers/createSvg';
import staticSvgs from '../../assets/staticSvgs/staticSvgs';
const d3 = require('d3');

class SvgContainer extends Component {
  componentDidMount() {
		this.addSvg();
  }

	componentDidUpdate() {
		this.addSvg();
  }

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.resetSvg !== nextProps.resetSvg) {
			return true;
		} else {
			return false;
		}
	}

	addSvg = () => {
		// clear prior svg
		d3.select(this.svg).html(null);

		const svgOptions = this.props.svgOptions;
		const selectedTarget = staticSvgs[this.props.selectedTarget];
		const target = this.svg;
  
    // createSvg(target, selectedTarget, svgOptions);
	}

	render() {
		return (
			<div className="svg-container">
        <svg ref={(elem) => { this.svg = elem; }} />
			</div>
		);
	}
}

SvgContainer.PropTypes = {
	resetSvg: PropTypes.bool,
	selectedOption: PropTypes.string
}

export default SvgContainer;
