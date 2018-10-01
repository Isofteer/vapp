
import types from '../Types'
export  const  CreateUser = (user)=>
{
   return {type:types.CREATEUSER,payload:user}

}
export const GetUser = ( id)=>
{
   return {type:types.GETUSER,payload:id}

}

export const GetUsers  = ()=>
{
   return {type:types.GETUSERS,payload:[]}

}