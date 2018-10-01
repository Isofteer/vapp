import Util from '../Util'
import initialState from '../Store/initialState'
import types from '../Types'

import  {SaveUserToBlockchain,GetUsersFromBlockchain} from '../Contracts/Actions'

export  function UserAction(state = initialState, action) {
  switch (action.type) {
    case types.CREATEUSER:
       
       let User = {... state.User};

        var UserType = User[Util.UserTypes[action.payload.privilage]];  

          UserType.users  = [ ...UserType.users,action.payload]
       
          console.log(User);
          
          SaveUserToBlockchain(action.payload);

      return {...state, User
      } 

      case types.GETUSER:
      return {...state,  posts: action.payload
      } 

      case types.GETUSERS:
            let cloneState = {...state.User};
      GetUsersFromBlockchain(cloneState);

      return {...state, cloneState
      } 
    default:
      return state
  }
}
