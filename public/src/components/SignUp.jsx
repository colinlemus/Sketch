import React from 'react';
import SketchLogo from './SketchLogo';
import axios from 'axios';
import '../pages/css/SignUp.css';
import '../pages/css/utilities.css';

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

        this.postInformation = this.postInformation.bind(this);
    }

    postInformation(event) {
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
            'firstName': this.state.firstName,
            'lastName': this.state.lastName,
            'email': this.state.email,
            'username': this.state.username,
            'password': this.state.password
        }

        axios.post('/api/login', payload).then((response) => {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className='container'>
                <SketchLogo />
                <div className='row'>
                    <div className='col-12'>
                        <div id="sign-up-box" className='card'>
                            <div className='card-header font-weight-bold text-center'>Sign Up</div>
                            <div className='card-body'>
                                <form onSubmit={this.postInformation}>
                                    <div className='row'>
                                        <div className='col-6' style={textField}>
                                            <div className='form-group'>
                                                <input onChange={(event,newValue) => this.setState({firstName:newValue})} type='text' className='form-control' name='firstName' placeholder='First Name' required='required' />
                                            </div>
                                        </div>
                                        <div className='col-6' style={textField}>
                                            <div className='form-group'>
                                                <input onChange={(event,newValue) => this.setState({lastName:newValue})} type='text' className='form-control' name='lastName' placeholder='Last Name' required='required' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <input onChange={(event,newValue) => this.setState({email:newValue})} type='text' className='form-control' name='email' placeholder='Email' required='required' />
                                    </div>
                                    <div className='form-group'>
                                        <input onChange={(event,newValue) => this.setState({username:newValue})} type='text' className='form-control' name='username' placeholder='Username' required='required' />
                                    </div>
                                    <div className='form-group'>
                                        <input onChange={(event,newValue) => this.setState({password:newValue})} type='text' className='form-control' name='password' placeholder='Password' required='required' />
                                    </div>
                                    <div className='form-group'>
                                        <button type='submit' className='btn btn-primary btn-lg btn-block login-btn' style={button} onClick={(event) => this.handleClick(event)}>Sign Up!</button>
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
  
export default SignUp;