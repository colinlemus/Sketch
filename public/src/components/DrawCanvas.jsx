import React from 'react';
import SketchCanvas from './DrawBox.jsx';
import SketchLogo from './SketchLogo';
import SketchLogin from './Login';
import '../pages/css/utilities.css';
import UserProfile from './UserProfile';

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


export default class CanvasDraw extends React.Component {
    static defaultProps = {
        loadTimeOffset: 5,
        brushSize: 6,
        canvasWidth: 500,
        canvasHeight: 500,
        disabled: false
    };
    
    constructor(props) {
      super(props);
          
        this.state = {
            brushColor: "#000000"
        }
      
        this.isMouseDown = false;
        this.linesArray = [];
        this.startDrawIdx = [];
        this.timeoutValidity = 0;
        this.handleColorGrey = this.handleColorGrey.bind(this);
        this.handleColorRed = this.handleColorRed.bind(this);
        this.handleColorYellow = this.handleColorYellow.bind(this);

    
    }

    handleColorGrey(event) {
        this.setState({
            brushColor: event.target.value="#d3d3d3"
        });
        console.log(event.target.value);
        event.preventDefault();
    }
    handleColorRed(event) {
        this.setState({
            brushColor: event.target.value="#FF0000"
        });
        console.log(event.target.value);
        event.preventDefault();
    }
    handleColorYellow(event) {
        this.setState({
            brushColor: event.target.value="#FFC300"
        });
        console.log(event.target.value);
        event.preventDefault();
    }
    handleColorChange(event) {
        this.setState({
            brushColor: event.target.value="#d3d3d3"
        });
        console.log(event.target.value);
        event.preventDefault();
    }
    handleColorChange(event) {
        this.setState({
            brushColor: event.target.value="#d3d3d3"
        });
        console.log(event.target.value);
        event.preventDefault();
    }
      
    getSaveData = () => {
        const saveData = {
            linesArray: this.linesArray,
            width: this.props.canvasWidth,
            height: this.props.canvasHeight
        };
        return JSON.stringify(saveData);
    };
      
    loadSaveData = (saveData, immediate) => {
        try {
            if (typeof saveData !== 'string') {
              throw new Error('saveData needs to be a stringified array!');
            }
            // parse first to catch any possible errors before clear()
            const { linesArray, width, height } = JSON.parse(saveData);
      
            if (!linesArray || typeof linesArray.push !== 'function') {
              throw new Error('linesArray needs to be an array!');
            }
      
            // start the load-process
            this.clear();
      
            if (
              width === this.props.canvasWidth &&
              height === this.props.canvasHeight
            ) {
              this.linesArray = linesArray;
            } else {
              // we need to rescale the lines based on saved & current dimensions
              const scaleX = this.props.canvasWidth / width;
              const scaleY = this.props.canvasHeight / height;
              const scaleAvg = (scaleX + scaleY) / 2;
      
              this.linesArray = linesArray.map(line => ({
                ...line,
                endX: line.endX * scaleX,
                endY: line.endY * scaleY,
                startX: line.startX * scaleX,
                startY: line.startY * scaleY,
                size: line.size * scaleAvg
              }));
            }
      
            this.redraw(immediate);
        } catch (err) {
            throw err;
        }
    };
      
    redraw = immediate => {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.props.canvasWidth, this.props.canvasHeight);
        }
      
        this.timeoutValidity++;
        const timeoutValidity = this.timeoutValidity;
        this.linesArray.forEach((line, idx) => {
            // draw the line with a time offset
            // creates the cool drawing-animation effect
            if (!immediate) {
              window.setTimeout(
                () => {
                  if (timeoutValidity === this.timeoutValidity) {
                    this.drawLine(line);
                  }
                },
                idx * this.props.loadTimeOffset
              );
            } else {
              // if the immediate flag is true, draw without timeout
              this.drawLine(line);
            }
          });
        };
      
        getMousePos = e => {
          const rect = this.canvas.getBoundingClientRect();
      
          // use cursor pos as default
          let clientX = e.clientX;
          let clientY = e.clientY;
      
          // use first touch if available
          if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
          }
      
          // return mouse/touch position inside canvas
          return {
            x: clientX - rect.left,
            y: clientY - rect.top
          };
        };
      
        clear = () => {
          if (this.ctx) {
            this.ctx.clearRect(0, 0, this.props.canvasWidth, this.props.canvasHeight);
          }
          this.timeoutValidity++;
          this.linesArray = [];
          this.startDrawIdx = [];
        };
      
        undo = () => {
          if (this.startDrawIdx.length > 0) {
            this.linesArray.splice(
              this.startDrawIdx.pop()
            );
            this.redraw(true);
            return true;
          }
          return false;
        };
      
        drawLine = line => {
          if (!this.ctx) return;
      
          this.ctx.strokeStyle = line.color;
          this.ctx.lineWidth = line.size;
          this.ctx.lineCap = 'round';
          this.ctx.beginPath();
          this.ctx.moveTo(line.startX, line.startY);
          this.ctx.lineTo(line.endX, line.endY);
          this.ctx.stroke();
        };
      
        drawStart = e => {
          this.isMouseDown = true;
          this.startDrawIdx.push(this.linesArray.length);
      
          const { x, y } = this.getMousePos(e);
          this.x = x;
          this.y = y;
      
          // make sure we start painting, useful to draw simple dots
          this.draw(e);
        };
      
        drawEnd = () => {
          this.isMouseDown = false;
        };
      
        draw = e => {
          if (!this.isMouseDown || this.props.disabled) return;
      
          // calculate the current x, y coords
          const { x, y } = this.getMousePos(e);
      
          // Offset by 1 to ensure drawing a dot on click
          const newX = x + 1;
          const newY = y + 1;
      
          // create current line object
          const line = {
            color: this.state.brushColor,
            size: this.props.brushSize,
            startX: this.x,
            startY: this.y,
            endX: newX,
            endY: newY
          };
      
          // actually draw the line
          this.drawLine(line);
      
          // push it to our array of lines
          this.linesArray.push(line);
      
          // notify parent that a new line was added
          if (typeof this.props.onChange === 'function') {
            this.props.onChange(this.linesArray);
          }
      
          // set current x, y coords
          this.x = newX;
          this.y = newY;
        };
        
        render() {
            if(UserProfile.isLoggedIn()) {
                return (
                    <div className='row' style={centerCanvas}>
                        <div className='col-12'>
                            <div>
                                <div onClick={this.handleColorGrey} value={this.brushColor}><SketchCanvas /></div>
                                <div onClick={this.handleColorRed} value={this.brushColor}><SketchCanvas /></div>
                                <div onClick={this.handleColorYellow} value={this.brushColor}><SketchCanvas /></div>
        
                             
                              
                                <div className='text-center'>            
                                    <canvas
                                        width={this.props.canvasWidth}
                                        height={this.props.canvasHeight}
                                        style={{
                                            background: '#fff',
                                            touchAction: 'none',
                                            ...this.props.style
                                        }}
                                        ref={canvas => {
                                            if (canvas) {
                                            this.canvas = canvas;
                                            this.ctx = canvas.getContext('2d');
                                            }
                                        }}
                                        onMouseDown={this.drawStart}
                                        onClick={() => false}
                                        onMouseUp={this.drawEnd}
                                        onMouseOut={this.drawEnd}
                                        onMouseMove={this.draw}
                                        onTouchStart={this.drawStart}
                                        onTouchMove={this.draw}
                                        onTouchEnd={this.drawEnd}
                                        onTouchCancel={this.drawEnd}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

            return (
                <div className='container'>
                    <SketchLogo />
                    <h1 className='text-center font-weight-bold' style={{color:'white'}}>
                        Sorry, but the page you tried visiting doesn't exist!
                        <div>Try logging in!</div>
                    </h1>
                </div>
            );
        }
}