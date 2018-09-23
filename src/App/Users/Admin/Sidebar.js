import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText, Divider}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';


 class Side  extends React.Component{
     constructor (props)
         {
           super(props)
         }
    render (){
        return (
        <div className = "admin-sidebar-menu">           
             <div className="side-menubar">                     
            <div className="dp">
                <img  src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqYj5MXA3bo7ka3ZbRCF1dkrgTUeLGghvzWAF6co3fGDXiDlVQA"></img>
            </div>
            
             <ul className="sidebar-options">
                        <li >
                        <i><Work/></i> &nbsp;Dashboard
                        </li>
                        <li >
                        <i><Work/></i> &nbsp;Propasal
                        </li>
                        <li>
                        <i><Work/></i> &nbsp;Live Logs
                        </li>
                        <li>
                        <i><Work/></i> &nbsp;Statistics
                        </li>
                        <li>
                        <i><Work/></i>&nbsp;  Users
                        </li>
                        <li>
                        <i><Work/></i> &nbsp;Calender
                        </li>
                        <li>
                        <i><Work/></i> &nbsp;Provisional 
                        </li>
                        <li className= "">
                        <i><Work/></i> &nbsp;wololo 
                        </li>
                    </ul>
                    
             </div>
             <div className="content-section">
   main content
              </div>
        </div>)
    }

}

export default  Side;