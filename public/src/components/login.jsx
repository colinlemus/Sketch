import React from 'react';
import * as LoginJS from '../pages/javascript/login.js';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';

const button = {
    backgroundColor: "#60c7c1",
    border: "none",
    top: "25%",
    textDecoration: "none"
}

class SketchLogin extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className='text-center vertical-center'>              
                        <div id='login-box' className='card'>
                            <div className='card-header font-weight-bold'>Login</div>
                            <div className='card-body'>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="password" placeholder="Password" required="required" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block login-btn" style={button} onClick={this.handleLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

	handleLogin() {
		LoginJS.getLoginInformation();
	}
}
  
export default SketchLogin;