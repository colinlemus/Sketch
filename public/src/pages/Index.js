import React, { Component } from 'react';
import SketchLogin from '../components/Login';
import SketchLogo from '../components/SketchLogo';
import '../pages/css/utilities.css';
import UserProfile from '../components/UserProfile';
import JoinGame from '../components/JoinGame';

export default class Index extends Component {
	constructor() {
		super();
	}

	render() {
		console.log(UserProfile.isLoggedIn());
		if(UserProfile.isLoggedIn() == 'true') {
			return (
				<div>
					<JoinGame />
				</div>
			)
		}

		return (
			<div className='container'>
				<SketchLogo />
				<SketchLogin />
			</div>
		);
	}
}