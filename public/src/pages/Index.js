import React, { Component } from 'react';
import SketchLogin from '../components/login';
import SketchLogo from '../components/sketchlogo';
import * as LoginJS from '../pages/javascript/login.js';

const container = {
	
}

class Index extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		LoginJS.log("Test.");
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