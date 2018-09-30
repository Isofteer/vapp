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
            checked:false,
        }
    }
    handleChecking = e=>{
        this.setState({checked:!this.state.checked})
    }

    render(){

        let  checked = this.state.checked;
        return (
            <div className="admin-main-content">  
                <div className="user-dashboard-label"> 
                 <Chip onClick ={e =>{this.handleChecking()}} label ="Register">   </Chip>
                 <Chip onClick ={e =>{this.handleChecking()}} label ="Create Account">  </Chip>
                 </div>
                <div className="users-list-aside">
                    <div  className="list">                    
                       <UserList/>
                    </div>
                    <div  className="more-actions">
                   
                           <div className ="command-pane">
                         <span> <a> All Users </a></span>
                         <span> <a> Admins  </a></span>
                         <span> <a> Registrars  </a></span>
                         <span> <a> Voters  </a></span>
                        

                        </div>
                                                    
                           <Slide  in ={checked}> 
                               <HelperTable/>
                           </Slide >

                            <Slide  in ={checked}>                            
                               <CreateUser/>
                           </Slide >

                    </div>
                   
               </div>
            </div>
        )
    }
}

export default  AdminDashboard