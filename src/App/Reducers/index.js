

import Actions from '../Types'
import { combineReducers } from 'redux'
import  * as user from './users'
export const rootReducer = combineReducers({
    RegisterUser:user.createUser,
    GetUser:user.getUser,
    GetUsers:user.getUsers,
})