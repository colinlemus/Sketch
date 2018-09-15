import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import gear from '../assests/gear.png';

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
                <a className="navbar-brand" href="#">
                    <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
                </a>
                <div className="my-2 my-lg-0">
                            <a className="navbar-brand" href="#">
                                <img src={gear} width="30" height="30" alt={gear} />
                            </a>
                        </div>
                </nav>
            </div>
        );
    }
}