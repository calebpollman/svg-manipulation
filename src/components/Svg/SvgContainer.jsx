import React, {Component} from 'react';
import createSvg from '../../helpers/createSvg';
import staticSvgs from '../../assets/staticSvgs/staticSvgs';

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
		const selectedOption = staticSvgs[this.props.selectedOption];
		const target = this.svg;
		createSvg(target, selectedOption);
  }

	// shouldComponentUpdate() {
	// 	return this.props.resetSvg;
	// }

	//componentWillReceiveProps()

	render() {
		return (
			<div className="svg-container">
        <svg ref={(elem) => { this.svg = elem; }} />
			</div>
		);
	}
}

export default SvgContainer;
