import React, {Component} from 'react';
import createSvg from '../../helpers/createSvg';
import staticSvgs from '../../assets/staticSvgs/staticSvgs';
const d3 = require('d3');

class SvgContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	};

  componentDidMount() {
		const selectedOption = staticSvgs[this.props.selectedOption];
		const target = this.svg;
		createSvg(target, selectedOption);
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

		const selectedOption = staticSvgs[this.props.selectedOption];
		const target = this.svg;
		createSvg(target, selectedOption);
	}

	render() {
		return (
			<div className="svg-container">
        <svg ref={(elem) => { this.svg = elem; }} />
			</div>
		);
	}
}

export default SvgContainer;
