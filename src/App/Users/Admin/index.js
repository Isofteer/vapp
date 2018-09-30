
import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText, Divider,Button}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';


import Sidebar from './Sidebar'
import Content from './Content'
import AdminDashboard from './admindashboard'



 class Layout  extends React.Component{
     constructor (props)        
     {
           super(props);
           console.log(this.props); 
     }
    handleOpenUsers = (_params)=>{

        console.log(_params);
    }

    render (){
        console.log(this.props);
        return (
        <div className = "admin-dashboard">           
             <div className="admin-sidebar">                     
              <Sidebar handleOpenUserActions = {this.handleOpenUsers.bind(this)}  store ={this.props.store}/>
            </div>
           
             <div className="admin-main">
             <AdminDashboard  store ={this.props.store} action ={this.props.Action}/>
              </div>
        </div>)
    }

}

export default  Layout;