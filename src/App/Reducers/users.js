import Util from '../Util'
import initialState from '../Store/initialState'
import types from '../Types'

import  {RegisterUsersToContract} from '../Contracts/Actions'

export  function UserAction(state = initialState, action) {

  let User = {... state.User}; 
   
    console.log(User);

  switch (action.type) {
    case types.CREATEUSER:  
             var UserType = User[Util.UserTypes[action.payload.privilage]];  

             UserType.users  = [ ...UserType.users,action.payload]
 
             RegisterUsersToContract(action.payload);

      return {...state, User
      } 

      case types.GETUSER:
      return {...state,  posts: action.payload
      } 

      case types.GETUSERS:  

      action.payload.map((_user)=>{

        var UserType = User[Util.UserTypes[_user.privilage]];  

          Object.keys(_user).map((key)=>{
            _user[key] =  _user[key].trim();
          })

        UserType.users.push(_user);
        
      });  

      return {...state, User
      } 
    default:
      return state
  }
}
