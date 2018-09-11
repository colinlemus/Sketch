import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "./drawArea";
import "../pages/css/utilities.css";
import SketchCanvas from "./game";
const pushit = {
    top: "50%"
}
class drawArea extends React.Component {
    render() {
        return (
        <div className="row">
            <div className="col-12">
                <div className="text-center">
                    <div ><CanvasDraw /></div>);
                </div>
            </div>
        </div>
        )
    }
}
export default drawArea;