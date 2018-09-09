import React from 'react';
import ReactDOM from 'react-dom';
import SketchIndex from './Index';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SketchIndex />, div);
	ReactDOM.unmountComponentAtNode(div);
});