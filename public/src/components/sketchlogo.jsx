import React from 'react';
import '../pages/css/SketchLogo.css';

class SketchLogo extends React.Component {
    render() {
        return (
            <div>
                <img className="sketch-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sketch_logo_frame.svg/1132px-Sketch_logo_frame.svg.png" alt=""></img>
            </div>
        );
    }
}
  
export default SketchLogo;