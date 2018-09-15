import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import gear from '../assests/gear.png';
import SketchLogo from './SketchLogo';
import JoinGame from './JoinGame';

const navbar = {
    width: "100%"
}

export default class SketchLobby extends React.Component {
    constructor(props, context) {
        super(props, context);
        this['state'] = {

        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navbar}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <img src="https://skribbl.io/res/pen.gif" width="30" height="30" alt="" />
                            </li>
                        </ul>
                        <div className="my-2 my-lg-0">
                            {/* <a className="navbar-brand" href="#">
                                <img src={gear} width="30" height="30" alt={gear} />
                            </a> */}
                            <div class="dropdown show">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <SketchLogo />
                    <JoinGame />
                </div>
            </div>
        );
    }
}