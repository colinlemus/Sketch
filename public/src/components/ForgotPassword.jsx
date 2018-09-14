import React from 'react';
import '../pages/css/SketchForgotPassword.css';
import '../pages/css/utilities.css';
import { Link } from 'react-router-dom'
import SketchLogo from '../components/SketchLogo';
import axios from 'axios';

const button = {
    backgroundColor: '#60c7c1',
    border: 'none',
    top: '25%',
    textDecoration: 'none'
}

class SketchForgotPassword extends React.Component {
    constructor(props, context) {
        super(props, context);

        this['state'] = {
            username: '',
            newPassword: '',
        };

        this['handleInformation'] = this['handleInformation'].bind(this);
        this['handleUsernameChangeState'] = this['handleUsernameChangeState'].bind(this);
        this['handlePasswordChangeState'] = this['handlePasswordChangeState'].bind(this);
        this['handleClick'] = this['handleClick'].bind(this);
    }

    handleInformation(event) {
        this.setState({
            username: this['state']['username'],
            newPassword: this['state']['newPassword']
        });

        event.preventDefault();
    }

    handleClick(event) {
        var username = this['state']['username'];
        var newPassword = this['state']['newPassword'];
        var combinedQuery = username + "/" + newPassword;

        axios.post('/api/forget/' + combinedQuery).then((response) => {
            console.log(combinedQuery);
            console.log(response);
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
            newPassword: event['target']['value']
        });
    }

    render() {
        return (
            <div className='container'>
                <SketchLogo />
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center vertical-center'>              
                            <div id='login-box' className='card'>
                                <div className='card-header font-weight-bold'>Forgot Password</div>
                                <div className='card-body'>
                                    <form onSubmit={this['handleClick']}>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' name='username' placeholder='Username' required='required' value={this['state']['username']} onChange={this['handleUsernameChangeState']} />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' name='newPassword' placeholder='Password' required='required' value={this['state']['newPassword']} onChange={this['handlePasswordChangeState']} />
                                        </div>
                                        <div className='form-group'>
                                            <button type='submit' value="Submit" className='btn btn-primary btn-lg btn-block login-btn' style={button}>Update Password!</button>
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