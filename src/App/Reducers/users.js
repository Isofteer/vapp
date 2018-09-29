import Util from '../Util'
import initialState from '../Store/initialState'

import types from '../Types'
export  function UserAction(state = initialState, action) {
  switch (action.type) {
    case types.CREATEUSER:
       
       let User = {... state.User};

        var UserType = User[Util.UserTypes[action.payload.privilage]];

        console.log(User);
        
        console.log(action.payload.privilage);

          UserType.users  = [ ...UserType.users,action.payload]
       
         console.log(UserType);

      return {...state, User
      } 

      case types.GETUSER:
      return {...state,  posts: action.payload
      } 

      case types.GETUSERS:
      return {...state,  posts: action.payload
      } 
    default:
      return state
  }
}
