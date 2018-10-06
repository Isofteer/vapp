

import { createStore ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import  JoinedReducers  from '../Reducers';
import initialState from './initialState'



   export default  createStore( JoinedReducers, initialState,applyMiddleware(thunk))
      

