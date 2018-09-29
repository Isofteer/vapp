

import { createStore } from 'redux'
import  JoinedReducers  from '../Reducers';
import initialState from './initialState'

   export default  createStore( JoinedReducers, initialState)
      

