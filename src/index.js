import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import 'bootstrap-4-grid';
import './index.css';
import   './index.mobi.css'
import './login.css'
import App from './App';
import  configureStore   from './App/Store'
import initialState  from './App/Store/initialState'

import registerServiceWorker from './registerServiceWorker';

let configuredStore = configureStore(initialState);


ReactDOM.render(
    <Provider store = {configuredStore}>
      <App/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
