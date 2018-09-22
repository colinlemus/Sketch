import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import { withRouter } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import JoinGame from './JoinGame';
import axios from 'axios';

const height100 = {
    height: '100%'
}

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this['state'] = {
            player: []
        }
    }

    componentDidMount() {
        setInterval(function () {
            axios.get('/api/lobby').then(response => {
                this.setState({
                    player: response['data']
                });
            })
        }.bind(this), 1000);
    }

    getUsers() {
        return (
            <div>
                {this.state.player.map(element => {
                    return (
                        <div className='text-center font-weight-bold'>
                            {element.onlineUser} | {element.score}
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div style={height100}>
                <div className='card rounded-0' style={height100}>
                    <div className='card-header text-center font-weight-bold'>Current Users:</div>
                    <br></br>
                    {this.getUsers()}
                    <div className='card-body' style={height100}></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Game);