import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import 'bootstrap-4-grid';
import './index.css';
import   './index.mobi.css'
import './login.css'
import App from './App';
import  configuredStore   from './App/Store'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store = {configuredStore}>
      <App/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
