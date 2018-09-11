import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SketchLogin from './pages/Index'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SketchCanvas from './components/game';
import CanvasDraw from './components/draw';

class App extends React.Component{ 
  render () {
    return (
      <div>
        {/* <nav>
          <Link to="/home">Login Page</Link>
        </nav> */}
        <div>
          <Route path="/login" component={SketchLogin}/>
          <Route path="/canvas" component={SketchCanvas}/>
          <Route path="/draw" component={CanvasDraw}/>
        </div>
        {/* <div>
          <Route path="/" component={}/>
        </div> */}
    </div>
    )
  }
 
}

ReactDOM.render(
  (<BrowserRouter> 
    <App />
  </BrowserRouter>), document.getElementById('root'));

registerServiceWorker();