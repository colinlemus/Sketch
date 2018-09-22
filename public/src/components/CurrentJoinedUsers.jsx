import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import { withRouter } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

const height100 = {
    height: '100%'
}

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this['state'] = {

        }
    }

    render() {
        return(
            <div style={height100}>
                <div className='card rounded-0' style={height100}>
                    <div className='card-header text-center font-weight-bold'>Current Users:</div>
                    <div className='card-body' style={height100}></div>
                </div>
            </div>
        );
    }
}
  
export default withRouter(Game);