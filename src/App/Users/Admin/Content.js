import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText, Divider}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';

import  CreateUser from './Actions/CreateUser';

class Content extends React.Component{

    render (){
       return (<div> <h1>Admin section</h1>
       
       
       <CreateUser />
       
       
        </div>)
    }
}

export default  Content;