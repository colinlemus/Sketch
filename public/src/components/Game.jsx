import React, { Component } from 'react';
import SketchLogin from './Login';
import SketchLogo from './SketchLogo';
import '../pages/css/utilities.css';
import UserProfile from './UserProfile';
import JoinGame from './JoinGame';
import CanvasDraw from './DrawCanvas';
import Chat from './ChatComponent';

const boxBorder = {
	border: '1px solid black',
	margin: '0px',
	padding: '0px'
}

export default class Index extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		//whenever the page first loads
	}

	render() {
		console.log(UserProfile.isLoggedIn());
		if(UserProfile.isLoggedIn()) {
			return (
				<div>
					<JoinGame />
				</div>
			)
		}

		return (
			<div className='container'>
				<SketchLogo />
				<div class="row">
					<div class="col-2" style={boxBorder}>
						Game Lobby user stuff here
					</div>

					<div class="col-7" style={boxBorder}>
						<CanvasDraw />
					</div>
					<div class="col-3" style={boxBorder}>
						<Chat />
					</div>
				</div>
			</div>
		);
	}
}