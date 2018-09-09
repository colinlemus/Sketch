import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SketchLogin from './pages/Index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SketchLogin />, document.getElementById('root'));
registerServiceWorker();