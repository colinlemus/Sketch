import React from 'react';
import CanvasDraw from './CanvasComponent';
import SketchCanvas from './DrawBox.jsx';
import '../pages/css/utilities.css';

const centerCanvas = {
    height: '90vh',
    alignItems: 'center',
    justifyContent: 'middle',
    display: 'flex'
}
const buttons = {
    top: "82.5vh",
    left:"33.7vw",
    display: "flex",
    allignItems: 'center',
    position: "relative",
}

const curser = {
    curser: "pointer",
    border: "1px solid black"

}

function changeCol(data) {
    CanvasDraw.Component.changeColor(data);
}

export default class drawArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        brushSize: '',
        brushColor: ''
        }
    }
    render() {
        return (
        <div>
            <div className="row">
                <div className="col-12">
                    <span style={buttons}>
                    <span style={curser} onClick={changeCol} color="#d3d3d3">
                    <SketchCanvas 
                    BrushColor={this.state.color}
                    />
                    </span>
                    <span><SketchCanvas /></span>
                    <span><SketchCanvas /></span>
                    <span><SketchCanvas /></span>
                    <span><SketchCanvas /></span>
                    <span><SketchCanvas /></span>
                    <span><SketchCanvas /></span>
                    <span><SketchCanvas /></span>
                    <span><SketchCanvas /></span>
                    <span><SketchCanvas /></span>


                    </span>
                    
                </div>
            </div>
            <div className='row' style={centerCanvas}>
                <div className='col-12'>
                    <div>
                        <div className='text-center'>
                            <CanvasDraw 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}