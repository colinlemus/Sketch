import React from 'react';
import CanvasDraw from './CanvasComponent';
import '../pages/css/utilities.css';

const centerCanvas = {
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'middle',
    display: 'flex'
}

export default class drawArea extends React.Component {
    render() {
        return (
        <div className='row' style={centerCanvas}>
            <div className='col-12'>
                <div>
                    <div className='text-center'><CanvasDraw /></div>
                </div>
            </div>
        </div>
        )
    }
}