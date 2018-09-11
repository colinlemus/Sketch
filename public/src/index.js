import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/Index'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CanvasDraw from './components/draw';
import GameChat from './pages/game-chat';

class App extends React.Component { 
  render () {
    return (
      <div>
        {/* <nav>
          <Link to="/home">Login Page</Link>
        </nav> */}
        <div>
          <Route path="/login" component={Index}/>
          <Route path="/draw" component={CanvasDraw}/>
        </div>
        <div>
          <Route path="/game-chat" component={GameChat}/>
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