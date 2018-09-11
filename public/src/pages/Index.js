import React, { Component } from 'react';
import SketchLogin from '../components/login';
import SketchLogo from '../components/sketchlogo';

class Index extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		//whenever the page first loads
	}

	render() {
		return (
			<div className="container">
				<SketchLogo />
				<SketchLogin />
			</div>
		);
	}
}

export default Index;