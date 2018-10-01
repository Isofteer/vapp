import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Typography,Chip,Slide ,List,ListItem,ListItemIcon,ListItemText,ListItemSecondaryAction, Divider,Avatar,Checkbox}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';

import UserList from './admindashgboard/userlist'
import HelperTable from './admindashgboard/UserlistHelper_A'
import CreateUser from './Actions/CreateUser'
class  AdminDashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            checked:true,    
            filterType:-1,       
        }
    }
    handleChecking = e =>{
  this.setState({checked:!this.state.checked});
    }

    filterBy = value =>{
        this.setState({filterType:value});

        this.props.action.GetUsers();
    }



    render(){

        let  checked = this.state.checked;
        let action = this.props.action;
        return (
            <div className="admin-main-content">  
                <div className="user-dashboard-label"> 
                 <Chip onClick ={e =>{this.handleChecking()}} label ="Register">   </Chip>
                 
                 </div>
                <div className="users-list-aside">
                    <div  className="list">                    
                       <UserList/>
                    </div>
                    <div  className="more-actions">
                   
                           <div className ="command-pane">
                         <span onClick ={e=>{this.filterBy(0)}}> <a> All Users </a></span>
                         <span onClick ={e=>{this.filterBy(1)}}> <a> Admins  </a></span>
                         <span onClick ={e=>{this.filterBy(2)}}> <a> Registrars  </a></span>
                         <span onClick ={e=>{this.filterBy(3)}}> <a> Voters  </a></span>
                        

                        </div>
                                                    
                         {
                          checked?  <HelperTable  func  = {action} filterType = {this.state.filterType}/>:null }
                         {
                          !checked?  <CreateUser  func  = {action}/>:null 
                         }
                             
                         

                                                       
                              
                         
                    </div>
                   
               </div>
            </div>
        )
    }
}

export default  AdminDashboard