import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'animate.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
