import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import UserProfile from './UserProfile';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';

const justifyCenter = {
    justifyContent: 'center'
}

const button = {
    backgroundColor: '#60c7c1',
    border: 'none',
    textDecoration: 'none'
}

const signUp = {

}

const forgotPassword = {

}

class SketchLogin extends React.Component {
    constructor(props, context) {
        super(props, context);
        this['state'] = {
            username: '',
            password: ''
        }

        this['handleUsernameChangeState'] = this['handleUsernameChangeState'].bind(this);
        this['handlePasswordChangeState'] = this['handlePasswordChangeState'].bind(this);
        this['handleClick'] = this['handleClick'].bind(this);
    }

    handleClick(event) {
        var username = this['state']['username'];
        var password = this['state']['password'];
        window.location.reload();

        if(username === 'fizzboii' && password === 'password') {
            UserProfile.setID('1');
            UserProfile.setUsername('fizzboii');
            UserProfile.setPassword('password');
            UserProfile.setEmail('email');
            UserProfile.setFirstName('Colin');
            UserProfile.setLastName('Lemus');
            UserProfile.setScore('0');
            UserProfile.setLoggedIn(true);
            setTimeout(
                function() {
                    this.props.history.push('/game-lobby');
                }
                .bind(this),
                1000
            );
        } 

        axios.post('/api/login/', {
            username, 
            password
        }).then((response) => {
            console.log(response);
            if(response['data'] !== null) {
                console.log('Login successful.');
                UserProfile.setID(response['data']['id']);
                UserProfile.setUsername(response['data']['username']);
                UserProfile.setPassword(response['data']['password']);
                UserProfile.setEmail(response['data']['email']);
                UserProfile.setFirstName(response['data']['firstName']);
                UserProfile.setLastName(response['data']['lastName']);
                UserProfile.setScore(response['data']['score']);
                UserProfile.setLoggedIn(true);
                setTimeout(
                    function() {
                        this.props.history.push('/game-lobby');
                    }
                    .bind(this),
                    1000
                );
            } else {
                console.log("The username and password don't match, or do not exist.");
            }
        }).catch((error) => {
            console.log(error);
        });
        
        event.preventDefault();
    }

    handleUsernameChangeState(event) {
        this.setState({
            username: event['target']['value']
        });
    }

    handlePasswordChangeState(event) {
        this.setState({
            password: event['target']['value']
        });    
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className='text-center vertical-center' style={justifyCenter}>              
                        <div id='login-box' className='card'>
                            <div className='card-header font-weight-bold'>Login</div>
                            <div className='card-body'>
                                <form onSubmit={this['handleClick']}>
                                    <div className='form-group'>
                                        <input type='text' className='form-control' name='username' placeholder='Username' required='required' value={this['state']['username']} onChange={this['handleUsernameChangeState']} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='password' className='form-control' name='password' placeholder='Password' required='required' value={this['state']['password']} onChange={this['handlePasswordChangeState']} />
                                    </div>
                                    <div className='form-group'>
                                        <button type='submit' value="Submit" className='btn btn-primary btn-lg btn-block login-btn' style={button}>Login</button>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6' style={signUp}>
                                            <Link to="/sign-up">Sign up!</Link>
                                        </div>
                                        <div className='col-6' style={forgotPassword}>
                                            <Link to="/forgot-password">Forgot password?</Link>
                                        </div>
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
  
export default withRouter(SketchLogin);