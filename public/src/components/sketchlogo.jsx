// JER for reference from package.json -  "heroku-postbuild": "cd public && npm install && npm run build",
import React from 'react';
import '../pages/css/SketchLogo.css';
import '../pages/css/utilities.css';
import logo from '../assests/logo.png';

const justifyCenter = {
    justifyContent: 'center'
}

class SketchLogo extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className="vertical-center" style={justifyCenter}>
                        <img id='sketch-logo' src={logo} alt={logo}></img>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default SketchLogo;