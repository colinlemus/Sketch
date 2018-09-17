import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import gear from '../assests/gear.png';
import SketchLogo from './SketchLogo';
import JoinGame from './JoinGame';

const accountBox = {
    width: '5vw'
}

export default class SketchLobby extends React.Component {
    constructor(props, context) {
        super(props, context);
        this['state'] = {

        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <SketchLogo />
                    <JoinGame />
                </div>
            </div>
        );
    }
}