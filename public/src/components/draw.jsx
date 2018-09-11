import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "./drawArea";
import "../pages/css/utilities.css";
import SketchCanvas from "./game";
const centerCanvas = {
    height: "100vh",
    alignItems: "center",
    justifyContent: "middle",
    display: "flex"

}
class drawArea extends React.Component {
    render() {
        return (
        <div className="row" style={centerCanvas}>
            <div className="col-12">
                <div>
                    <div className="text-center"><CanvasDraw /></div>);
                </div>
            </div>
        </div>
        )
    }
}
export default drawArea;