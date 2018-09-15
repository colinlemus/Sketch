import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class SketchLobby extends React.Component {
    constructor(props, context) {
        super(props, context);
        this['state'] = {

        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {sessionStorage.getItem("username")}
                </div>
            </div>
        );
    }
}