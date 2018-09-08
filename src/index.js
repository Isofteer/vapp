import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-4-grid';
import './index.css';
import   './index.mobi.css'
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
