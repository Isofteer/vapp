import {web3} from '../Contracts'
import Util from  './index'
export const fromArraysofUsers = (inputArray)=>{

var usersArray = [];
inputArray[0].map((address,index)=>{                 
                  
    usersArray.push({address:address,
         firstName: web3.utils.hexToString(inputArray[1][index]).trim(),
         surname: web3.utils.hexToString(inputArray[2][index]).trim(),
         privilage:inputArray[3][index]})
        

})

return usersArray;

}


export const MergeAllUsersInStore =(UserListInStore,filter)=>{
 var UserObject = UserListInStore.User;
var objects = Util.UserTypes;
var AllUsers = [];

Object.keys(Util.UserTypes).map((key)=>{
      if(filter==0 ||filter==-1)
      {
        AllUsers = [...AllUsers,...UserObject[Util.UserTypes[key]].users]  
      }
      else{
        AllUsers = [...AllUsers,...UserObject[Util.UserTypes[filter]].users]
      }
})

return AllUsers;
}