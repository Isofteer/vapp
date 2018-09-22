import Util from '../Util'
import initialState from '../Store/initialState'

import types from '../Types'
export  function createUser(state = initialState.User, action) {
  switch (action.type) {
    case types.CREATEUSER:
       
       let User = {... state};

        var UserType = User[Util.UserTypes[action.payload.privilage]];
        console.log(User);
        console.log(action.payload.privilage);

          UserType.users  = [ ...UserType.users,action.payload]
       
         console.log(UserType);

      return {...state, User
      } 
    default:
      return state
  }
}
export  function getUser(state = initialState.User, action) {
  switch (action.type) {
    case types.GETUSER:
      return {...state,  posts: action.payload
      } 
    default:
      return state
  }
}
export  function getUsers(state = initialState.User, action) {
  switch (action.type) {
    case types.GETUSERS:
      return {...state,  posts: action.payload
      } 
    default:
      return state
  }
}