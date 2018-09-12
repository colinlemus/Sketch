import React, { Component } from 'react';
import SketchLogin from '../components/Login';
import SketchLogo from '../components/SketchLogo';

export default class Index extends Component {
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