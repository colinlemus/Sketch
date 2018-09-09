import React from 'react';
import '../pages/css/SketchLogin.css';
import SketchLogo from '../components/sketchlogo';

class SketchLogin extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div id='login-box' className='card'>
                        <div className='card-header text-center font-weight-bold'>Login</div>
                        <div className='card-body'></div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default SketchLogin;