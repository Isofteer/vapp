import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText, Divider}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';

import  CreateUser from './Actions/CreateUser';

class Content extends React.Component{

    handleCreateUser  = (user)=>{
    this.props.action.CreateUser(user);
    }

    render (){
    let props = this.props;
       return (<div> <h1>Admin section</h1>
       
       
       <CreateUser  func ={props} />
       <button onClick={()=>this.handleCreateUser({})}>
                 create user man
       </button>
       
        </div>)
    }
}

export default  Content;