import React from 'react';
import '../pages/css/SketchLogo.css';
import '../pages/css/utilities.css';

class SketchLogo extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center vertical-center-top'>
                        <img id="sketch-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sketch_logo_frame.svg/1132px-Sketch_logo_frame.svg.png" alt=""></img>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default SketchLogo;