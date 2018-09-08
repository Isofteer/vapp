import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText, Divider}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';

import DefaultView from './Default'
import User from './user/Users'
import Propasal from './Propasal/Propasal'
import  ExpansionPanel from './expansionpanels'
import Login from './Login'
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={
                name:"tonnie",
                m_open:false,
                defaultView:false,
                loggedIn:false,
        }

    }


handSwitchViews =(bool)=>{
     if(bool)
     {
        return "block"
     }
    else{
       return "none"
       }
}

handleViewAdmin = (e,show)=>{

    this.setState({defaultView:show});
    
}


    render()
    {
        return (
            <div className='container-fluid wrapper'> 

              {
                (this.state.loggedIn)?             

                  <div className =" row cstm-row">
                <div className="side-bar">
                   
                <div className="dp">
                        <img  src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqYj5MXA3bo7ka3ZbRCF1dkrgTUeLGghvzWAF6co3fGDXiDlVQA"></img>
                    </div>

                       <div className="side-bar-menu">
                        <ul className="">
                        <li  onClick ={ (e)=>this.handleViewAdmin(e,true)}>
                        <i><Work/></i> &nbsp; Dashboard
                        </li>
                        <li  onClick ={ (e)=>this.handleViewAdmin(e,false)}>
                        <i><Work/></i> &nbsp; Propasal
                        </li>
                        <li>
                        <i><Work/></i> &nbsp; Statistics
                        </li>
                        <li>
                        <i><Work/></i>&nbsp;  Users
                        </li>
                        <li>
                        <i><Work/></i> &nbsp;  Calender
                        </li>
                        <li>
                        <i><Work/></i> &nbsp;  Provisional 
                        </li>
                        <li className= "">
                        <i><Work/></i> &nbsp;  last child 
                        </li>
                    </ul>
                    
                    </div>
                    <div className="personalization-settings">
                            <i><Work/></i> &nbsp;
                            <i><Work/></i> &nbsp;
                            <i><Work/></i> &nbsp;                
                    </div>   
                      
             </div>
              
                
             { //Check if message failed
            (this.state.defaultView)
              ?<DefaultView/> 
             : <div className="main-bar">
             <Propasal />
             </div>
               }



               {/* [ <div  className="middle-bar">
             <ExpansionPanel/>                   
                 </div>
                 , <div className="main-bar">   
                 <User/>             
                     </div>
                  ] */}
               
                   
            </div>
                 :<Login/>
             }
            
            </div>
        )
    }
}

export default Dashboard;