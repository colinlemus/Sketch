import React from 'react';
import '../pages/css/SketchForgotPassword.css';
import '../pages/css/utilities.css';
import { Link } from 'react-router-dom'
import SketchLogo from './sketchlogo.jsx';
import axios from 'axios';

const justifyCenter = {
    justifyContent: 'center'
}

const button = {
    backgroundColor: '#60c7c1',
    border: 'none',
    textDecoration: 'none',
    whiteSpace: 'normal'
}

const loginButton = {
    position: "relative",
    top: "2vh",
    marginBottom: "4vh"
}

const updateButton = {
    position: "relative",
    top: "1vh"
}

class SketchForgotPassword extends React.Component {
    constructor(props, context) {
        super(props, context);

        this['state'] = {
            username: '',
            newPassword: '',
        };

        this['handleUsernameChangeState'] = this['handleUsernameChangeState'].bind(this);
        this['handlePasswordChangeState'] = this['handlePasswordChangeState'].bind(this);
        this['handleClick'] = this['handleClick'].bind(this);
    }

    handleClick(event) {
        var username = this['state']['username'];
        var newPassword = this['state']['newPassword'];

        axios.post("/api/forget/", {
            username,
        }).then((response) => {
            console.log(response);
            axios.put('/api/forget/', {
                id: response['data']['id'],
                firstName: response['data']['firstName'],
                lastName: response['data']['lastname'],
                email: response['data']['email'],
                username: username,
                password: newPassword
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
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
            newPassword: event['target']['value']
        });
    }

    render() {
        return (
            <div className='container'>
                <SketchLogo />
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center vertical-center' style={justifyCenter}>              
                            <div id='login-box' className='card'>
                                <div className='card-header font-weight-bold'>Forgot Password</div>
                                <div className='card-body'>
                                    <form onSubmit={this['handleClick']}>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' name='username' placeholder='Username' required='required' value={this['state']['username']} onChange={this['handleUsernameChangeState']} />
                                        </div>
                                        <div className='form-group'>
                                            <input type='password' className='form-control' name='newPassword' placeholder='New Password' required='required' value={this['state']['newPassword']} onChange={this['handlePasswordChangeState']} />
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6' style={loginButton}>
                                                <Link to='/'>Back to Login!</Link>
                                            </div>
                                            <div className='col-md-6' style={updateButton}>
                                                <div className='form-group'>
                                                    <button type='submit' value="Submit" className='btn btn-primary btn-lg btn-block login-btn' style={button}>Update Password!</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default SketchForgotPassword;