import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SketchLogin from './pages/Index'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component{ 
  render () {
    return (
      <div>
        {/* <nav>
          <Link to="/home">Login Page</Link>
        </nav> */}
        <div>
          <Route path="/login" component={SketchLogin}/>
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