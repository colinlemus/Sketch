import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import { withRouter } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this['state'] = {

        }
    }

    render() {
        return(
            <div>
                <div className='card'>
                    <div className='card-header text-center font-weight-bold'>Current Users:</div>
                    <div className='card-body'></div>
                </div>
            </div>
        );
    }
}
  
export default withRouter(Game);