import React from 'react';
import '../pages/css/SketchLogo.css';
import '../pages/css/utilities.css';

class SketchLogo extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className='text-center vertical-center-top'>
                        <img id='sketch-logo' src='https://skribbl.io/res/logo.gif' alt='Logo'></img>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default SketchLogo;