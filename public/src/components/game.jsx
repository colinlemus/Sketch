import React from 'react';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import Canvas from './canvas'

// const button = {
//     backgroundColor: "#60c7c1",
//     border: "none",
//     textDecoration: "none"
// }

            class SketchCanvas extends React.Component {
                render() {
                    return (<div><Canvas draw={drawCanvas} width={400} height={400} realtime/></div>);
                }
            }
 
function drawCanvas({ctx, time}) {
    const {width, height} = ctx.canvas
    ctx.save()
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = 'pink'
    ctx.translate(width / 2, height / 2)
    //ctx.rotate(((time / 10) % 360) * Math.PI / 180)
    ctx.fillRect(-1 * width / 4, -1 * height / 4, width / 2, height / 2)
    ctx.restore()
}
export default SketchCanvas;