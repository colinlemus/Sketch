import React, { Component } from 'react';
import SketchLogin from '../components/Login';
import SketchLogo from '../components/SketchLogo';
import '../pages/css/utilities.css';

<<<<<<< Updated upstream
export default class Index extends Component {
=======
class Index extends Component {
>>>>>>> Stashed changes
	constructor() {
		super();
	}

	componentDidMount() {
		//whenever the page first loads
	}

	render() {
		return (
			<div className='container'>
				<SketchLogo />
				<SketchLogin />
			</div>
		);
	}
}