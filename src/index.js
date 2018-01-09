
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reactComponent = <App url='http://localhost:3001/api/vendors' />;
const reactRoot = document.getElementById('reactRoot');

ReactDOM.render(reactComponent, reactRoot);

registerServiceWorker();
