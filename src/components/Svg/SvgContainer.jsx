import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createSvg from '../../helpers/createSvg';

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
		const {optionList, svgInfo} = this.props;
		
		// clear prior svg
		d3.select(this.svg).html(null);
		const target = this.svg;

		createSvg(target, svgInfo, optionList);
	}

	render() {
		return (
			<div id="main-svg" className="svg-container">
        <svg ref={(elem) => { this.svg = elem; }} />
			</div>
		);
	}
}

SvgContainer.propTypes = {
  optionList: PropTypes.object,
	resetSvg: PropTypes.bool,
	svgInfo: PropTypes.array,
}

export default SvgContainer;
