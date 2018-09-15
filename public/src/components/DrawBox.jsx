import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import Canvas from './BoxComponent'

class SketchCanvas extends React.Component {
    render() {
        return (<div><Canvas draw={drawCanvas} width={50} height={50} realtime/></div>);
    }
}
 
function drawCanvas({ctx, time}) {
    const {width, height} = ctx.canvas
    ctx.save()
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = 'pink'
    ctx.translate(width / 2, height / 2)
    ctx.fillRect(-1 * width / 4, -1 * height / 4, width / 2, height / 2)
    ctx.restore()
}
export default SketchCanvas;