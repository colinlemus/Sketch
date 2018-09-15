import React from 'react';
import SketchLogo from './SketchLogo';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../pages/css/SignUp.css';
import '../pages/css/utilities.css';

const justifyCenter = {
    justifyContent: 'center'
}

const button = {
    backgroundColor: '#60c7c1',
    border: 'none',
    top: '25%',
    textDecoration: 'none'
}

const textField = {

}

class SignUp extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        };

        this.handleInformation = this.handleInformation.bind(this);
        this.handleFirstNameChangeState = this.handleFirstNameChangeState.bind(this);
        this.handleLastNameChangeState = this.handleLastNameChangeState.bind(this);
        this.handleEmailChangeState = this.handleEmailChangeState.bind(this);
        this.handleUsernameChangeState = this.handleUsernameChangeState.bind(this);
        this.handlePasswordChangeState = this.handlePasswordChangeState.bind(this);
    }

    handleInformation(event) {
        this.setState({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        });

        event.preventDefault();
    }

    handleClick(event) {
        var payload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        console.log(payload);
        axios.post('/api/userData', payload).then((response) => {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleFirstNameChangeState(event) {
        this.setState({
            firstName: event.target.value
        });
    }

    handleLastNameChangeState(event) {
        this.setState({
            lastName: event.target.value
        });
    }

    handleEmailChangeState(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleUsernameChangeState(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChangeState(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className='container'>
                <SketchLogo />
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center vertical-center' style={justifyCenter}>
                            <div id="sign-up-box" className='card'>
                                <div className='card-header font-weight-bold text-center'>Sign Up</div>
                                <div className='card-body'>
                                    <form onSubmit={this.handleInformation}>
                                        <div className='row'>
                                            <div className='col-6' style={textField}>
                                                <div className='form-group'>
                                                    <input onChange={this.handleFirstNameChangeState} value={this.state.firstName} type='text' className='form-control' name='firstName' placeholder='First Name' required='required' />
                                                </div>
                                            </div>
                                            <div className='col-6' style={textField}>
                                                <div className='form-group'>
                                                    <input onChange={this.handleLastNameChangeState} value={this.state.lastName} type='text' className='form-control' name='lastName' placeholder='Last Name' required='required' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <input onChange={this.handleEmailChangeState} value={this.state.email} type='text' className='form-control' name='email' placeholder='Email' required='required' />
                                        </div>
                                        <div className='form-group'>
                                            <input onChange={this.handleUsernameChangeState} value={this.state.username} type='text' className='form-control' name='username' placeholder='Username' required='required' />
                                        </div>
                                        <div className='form-group'>
                                            <input onChange={this.handlePasswordChangeState} value={this.state.password} type='text' className='form-control' name='password' placeholder='Password' required='required' />
                                        </div>
                                        <div className='form-group'>
                                            <button type='submit' className='btn btn-primary btn-lg btn-block login-btn' style={button} onClick={(event) => this.handleClick(event)}>Sign Up!</button>
                                        </div>
                                    </form>
                                    <div>
                                        <Link to="/">Back to Login!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default SignUp;