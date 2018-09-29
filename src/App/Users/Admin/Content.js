import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText,ListItemSecondaryAction, Divider,Avatar,Checkbox}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';
import Util from '../../Util'
import  CreateUser from './Actions/CreateUser';

class Content extends React.Component{

    handleCreateUser  = (user)=>{
    this.props.action.CreateUser(user);
    }

    render (){
    let props = this.props;

    let UserObject = this.props.store.User;

    console.log(UserObject);
       return (
       <div className= "admin-content">           
           <div className="admin-users">
                    <h3>Super Admin Users</h3>
             <ul>
                {
                     UserObject["Admin"].users.map (object =>
                        
                        {return (<li> hellow</li>);}
                        )
                }               
                 
             </ul>
             <h3>Registras</h3>
             <ul>
                {
                     UserObject["Registrar"].users.map ((_user,index) =>
                        
                        {return (<li key = {index}>  {_user.firstname} &nbsp; {_user.surname}</li>);}
                        )
                }               
                 
             </ul>

             <ul>
                {
                     UserObject["Voter"].users.map (object =>
                        
                        {return (<li> hellow</li>);}
                        )
                }               
                 
             </ul>
               


           </div>
       
             <div className="crte-user">
                <CreateUser  func ={props} />
              </div> 
                
        </div>)
    }
}

export default  Content;