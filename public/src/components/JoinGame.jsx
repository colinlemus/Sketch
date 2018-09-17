import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import UserProfile from './UserProfile';
import { withRouter } from 'react-router-dom'

const justifyCenter = {
    justifyContent: 'center'
}

const button = {
    backgroundColor: '#60c7c1',
    border: 'none',
    textDecoration: 'none'
}

class JoinGame extends React.Component {
    constructor(props, context) {
        super(props, context);
        this['state'] = {

        }

        this['handleClick'] = this['handleClick'].bind(this);
        this['handleLogout'] = this['handleLogout'].bind(this);
    }

    handleClick() {
        this['props']['history'].push('/draw');
    }

    handleLogout() {
        UserProfile.setUsername('');
        UserProfile.setPassword('');
        UserProfile.setEmail('');
        UserProfile.setFirstName('');
        UserProfile.setLastName('');
        this['props']['history'].push('/');
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className='text-center vertical-center' style={justifyCenter}>              
                        <div id='login-box' className='card'>
                            <div className='card-header font-weight-bold'>
                                Join a Game!
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this['handleClick']}>
                                    <div className='form-group'>
                                        <button type='submit' value="Submit" className='btn btn-primary btn-lg btn-block login-btn' style={button}>Join</button>
                                    </div>
                                </form>
                                <form onSubmit={this['handleLogout']}>
                                    <div className='form-group'>
                                        <button type='submit' value="Submit" className='btn btn-primary btn-lg btn-block login-btn' style={button}>Logout</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default withRouter(JoinGame);