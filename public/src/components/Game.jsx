import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import UserProfile from './UserProfile';
import SketchLogo from './SketchLogo';
import { withRouter } from 'react-router-dom';
import CanvasDraw from './DrawCanvas';
import Chat from './ChatComponent';
import CurrentJoinedUsers from './CurrentJoinedUsers';

const boxBorder = {
	border: '1px solid black',
	margin: '0px',
	padding: '0px'
}

const card = {
    width: '100%',
    height: '100%',
}

const cardBody = {
    width: '100%',
    background: 'rgb(0, 0, 0, 0.01)',
    padding: '30px 20px 20px 20px',
    height: '100%',
}

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this['state'] = {

        }
    }

    render() {
        // COMMENTING OUT FOR DEVELOPMENT
        // if(UserProfile.isLoggedIn() == 'true') {
            return(
                <div className='container'>
                    {/* <br></br> */}
                    {/* <SketchLogo /> */}
                    <div className="row">
                        <div className="col-2" style={boxBorder}>
                            <CurrentJoinedUsers />
                        </div>
        
                        <div className="col-7" style={boxBorder}>
                            <div className='card' style={card}>
                                <div className='card-header text-center font-weight-bold'>Word</div>
                                <div className='card-body' style={cardBody}>
                                    <CanvasDraw />
                                </div>
                            </div>
                        </div>
                        <div className="col-3" style={boxBorder}>
                            <Chat />
                        </div>
                    </div>
                </div>
            );
        // } else {
        //     return (
        //         <div className='container'>
        //             <SketchLogo />
        //             <h1 className='text-center font-weight-bold' style={{color:'white'}}>
        //                 Sorry, but the page you tried visiting doesn't exist!
        //                 <div>Try logging in!</div>
        //             </h1>
        //         </div>
        //     );
        // }
    }
}
  
export default withRouter(Game);