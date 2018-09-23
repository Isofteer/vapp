import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText,ListItemSecondaryAction, Divider,Avatar,Checkbox}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';

import  CreateUser from './Actions/CreateUser';

class Content extends React.Component{

    handleCreateUser  = (user)=>{
    this.props.action.CreateUser(user);
    }

    render (){
    let props = this.props;

    console.log(props);

       return (
       <div className= "admin-content">
           
           <div className="admin-users">
           <List>



                   <ListItem>
                    <Avatar alt="Remy Sharp" src="http://simpleicon.com/wp-content/uploads/user1.png" />
                    <ListItemText primary="User A" />
                    <ListItemSecondaryAction>
                    <Checkbox                       
                        />
                    </ListItemSecondaryAction>
                   </ListItem>

         
                   
              </List> 
             
           </div>
       
             <div className="crte-user">
                <CreateUser  func ={props} />
              </div> 
                
        </div>)
    }
}

export default  Content;