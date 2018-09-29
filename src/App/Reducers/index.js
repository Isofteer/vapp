

import Actions from '../Types'
import { combineReducers } from 'redux'
import  * as user from './users'
const JoinedReducers =  combineReducers({
    UserAction:user.UserAction,
   
})

export  default  JoinedReducers