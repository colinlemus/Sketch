import React, { Component } from 'react';
import SketchLogin from '../components/login';
import SketchLogo from '../components/sketchlogo';
<<<<<<< Updated upstream
=======
import * as LoginJS from '../pages/javascript/login.js';
>>>>>>> Stashed changes

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