import React from 'react';
import * as LoginJS from '../pages/javascript/login.js';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

const button = {
    backgroundColor: '#60c7c1',
    border: 'none',
    top: '25%',
    textDecoration: 'none'
}

const signUp = {
    
}

const forgotPassword = {

}

class SketchLogin extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: ''
        };

        this.handleInformation = this.handleInformation.bind(this);
    }

    handleInformation(event) {
        this.setState({
            username: this.state.username,
            password: this.state.password
        });

        event.preventDefault();
    }

    handleClick(event) {
        var payload = {
            'username' : this.state.username,
            'password' : this.state.password
        }

        axios.get('/api/login', payload).then((response) => {
            console.log(response);
            if(response.status == 200) {
                console.log('Login successful.');
                var uploadScreen = [];
                // uploadScreen.push(<UploadScreen appContext={this.props.appContext}/>)
                // this.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
            } else {
                console.log("The username and password don't match, or do not exist.");
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className='text-center vertical-center'>              
                        <div id='login-box' className='card'>
                            <div className='card-header font-weight-bold'>Login</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleInformation}>
                                    <div className='form-group'>
                                        <input onChange={(event,newValue) => this.setState({username:newValue})} type='text' className='form-control' name='username' placeholder='Username' required='required' />
                                    </div>
                                    <div className='form-group'>
                                        <input onChange={(event,newValue) => this.setState({password:newValue})} type='text' className='form-control' name='password' placeholder='Password' required='required' />
                                    </div>
                                    <div className='form-group'>
                                        <button type='submit' className='btn btn-primary btn-lg btn-block login-btn' style={button} onClick={(event) => this.handleClick(event)}>Login</button>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6' style={signUp}>
                                            <Link to="/sign-up">Sign up!</Link>
                                        </div>
                                        <div className='col-6' style={forgotPassword}>
                                            <Link to="/forgot">Forgot password?</Link>
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
  
export default SketchLogin;