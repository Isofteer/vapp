
import types from '../Types'
import {fromArraysofUsers} from '../Util/Converter'
import {GetUsersFromContract,RegisterUsersToContract} from '../Contracts/Actions'
export  const  CreateUser = (user)=>
{
   return {type:types.CREATEUSER,payload:user}

}
export const GetUser = ( id)=>
{
   return {type:types.GETUSER,payload:id}

}

export const GetUsers  = (Users)=>
{
   

   return {type:types.GETUSERS,payload:Users}

}


export const GetBlockChainUsers =()=>{
  return dispatch =>{
    GetUsersFromContract()
    .then((response,error)=>{
       if(error)
       {

       }
       else{

           var Users = fromArraysofUsers(response); 

           dispatch (GetUsers(Users));

           console.log(response);
       }

    })
  }
}

export const RegisterUsersToBlockchain =_user => {
  return   dispatch=>{
    RegisterUsersToContract(_user)
    .then((result,error)=>{  
          

      if(error)
      {
        alert("Theres was an error with this activity");
      }
      else{
        dispatch(CreateUser(_user));
       alert("Success");

      }
    })

  }

}
