
import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText, Divider,Button}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';


import Sidebar from './Sidebar'
import Content from './Content'



 class Layout  extends React.Component{
     constructor (props)
         {
           super(props);
           console.log(this.props);
         }
    render (){
        return (
        <div className = "parent-wrapper">           
             <div className="side-menu-bar">                     
              <Sidebar  store ={this.props.store}/>
            </div>
           
             <div className="content-section">
             <Content  store ={this.props.store} action ={this.props.Action}/>
              </div>
        </div>)
    }

}

export default  Layout;